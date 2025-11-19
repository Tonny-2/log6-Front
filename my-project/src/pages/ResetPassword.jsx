import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../../api.js";

function useQuery() {
    const { search } = useLocation();
    return new URLSearchParams(search);
}

function ResetPassword() {
    const query = useQuery();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const t = query.get("token");
        const e = query.get("email");
        if (t && e) {
            setToken(t);
            setEmail(e);
        } else {
            setMsg("Invalid password reset link");
        }
    }, [query]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!token || !email) return;
        setMsg("");
        setLoading(true);
        try {
            const { data } = await api.post("/auth/reset-password", {
                token,
                email,
                password,
            });
            setMsg(data.message);
            setTimeout(() => navigate("/login"), 1500);
        } catch (err) {
            setMsg(
                err.response?.data?.message ||
                "Something went wrong, please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            {msg && <p>{msg}</p>}
            {!token || !email ? (
                <p>Reset link is invalid or missing parameters.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "0.5rem" }}>
                        <label>
                            New password
                            <br />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? "Resetting..." : "Reset password"}
                    </button>
                </form>
            )}
        </div>
    );
}

export default ResetPassword;