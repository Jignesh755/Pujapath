import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [plan, setPlan] = useState("Daily Pack – ₹30/day");
  const [deliveryTime, setDeliveryTime] = useState("Before 6:00 AM");
  const [addons, setAddons] = useState({
    agarbatti: false,
    ghee: false,
    cotton: false
  });

  const handleOrder = () => {
    const addonList = Object.entries(addons)
      .filter(([_, v]) => v)
      .map(([k]) => k === "ghee" ? "Ghee Diya" : k === "cotton" ? "Cotton Wicks" : "Agarbatti")
      .join(", ") || "None";

    const message = `Hello PujaPath, I would like to order:
  Name: ${name}
  Phone: ${phone}
  Address: ${address}
  Plan: ${plan}
  Add-ons: ${addonList}
  Delivery Time: ${deliveryTime}`;

    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: 600, margin: "auto" }}>
      <h1 style={{ color: "#b15c0a" }}>Welcome to PujaPath.com</h1>
      <p>Your fresh puja flowers, delivered to your doorstep every morning.</p>

      <div style={{ marginTop: 32 }}>
        <h2>Choose Your Plan</h2>
        <select value={plan} onChange={e => setPlan(e.target.value)} style={{ width: "100%", padding: 8, marginTop: 8 }}>
          <option>Daily Pack – ₹30/day</option>
          <option>Weekly Pack – ₹190/week</option>
          <option>Festival Pack – ₹299 onwards</option>
        </select>

        <div style={{ marginTop: 16 }}>
          <h3>Add-ons</h3>
          <label><input type="checkbox" checked={addons.agarbatti} onChange={() => setAddons({ ...addons, agarbatti: !addons.agarbatti })} /> Agarbatti</label><br/>
          <label><input type="checkbox" checked={addons.ghee} onChange={() => setAddons({ ...addons, ghee: !addons.ghee })} /> Ghee Diya</label><br/>
          <label><input type="checkbox" checked={addons.cotton} onChange={() => setAddons({ ...addons, cotton: !addons.cotton })} /> Cotton Wicks</label>
        </div>

        <div style={{ marginTop: 24 }}>
          <h2>Delivery Details</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 8 }}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 8 }}
          />
          <textarea
            placeholder="Address & Landmark"
            value={address}
            onChange={e => setAddress(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 8 }}
          />
          <select
            value={deliveryTime}
            onChange={e => setDeliveryTime(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 16 }}
          >
            <option>Before 6:00 AM</option>
            <option>6:00 AM – 7:00 AM</option>
            <option>7:00 AM – 8:00 AM</option>
          </select>

          <button
            onClick={handleOrder}
            style={{
              width: "100%",
              padding: 12,
              backgroundColor: "#25D366",
              color: "white",
              fontSize: 16,
              border: "none",
              cursor: "pointer"
            }}
          >
            Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
