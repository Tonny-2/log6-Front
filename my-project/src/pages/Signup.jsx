import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../api.js";

function Signup() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg("");
        setLoading(true);
        try {
            const { data } = await api.post("/auth/signup", form);
            setMsg(data.message);
            localStorage.setItem("token", data.token);
            setTimeout(() => navigate("/login"), 1000);
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
            <h2>Signup</h2>
            {msg && <p>{msg}</p>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "0.5rem" }}>
                    <label>
                        Name
                        <br />
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                    <label>
                        Email
                        <br />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                    <label>
                        Password
                        <br />
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Signing up..." : "Sign up"}
                </button>
            </form>
            <p style={{ marginTop: "0.5rem" }}>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
}

export default Signup;