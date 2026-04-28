import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", phone: "" });

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    window.location.href = "https://wa.me/919205791900";
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Learn Digital Marketing</h1>

      <form onSubmit={submit}>
        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br /><br />

        <input
          placeholder="Phone"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <br /><br />

        <button>Book Demo</button>
      </form>
    </div>
  );
}
