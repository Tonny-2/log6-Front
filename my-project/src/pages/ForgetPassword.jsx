import React, { useState } from "react";
import { api } from "../../api.js";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg("");
        setLoading(true);
        try {
            const { data } = await api.post("/auth/forgot-password", { email });
            setMsg(data.message);
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
            <h2>Forgot Password</h2>
            {msg && <p>{msg}</p>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "0.5rem" }}>
                    <label>
                        Enter your email
                        <br />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send reset link"}
                </button>
            </form>
            <p style={{ marginTop: "0.5rem" }}>
                Check the backend console for the reset URL during development.
            </p>
        </div>
    );
}

export default ForgotPassword;