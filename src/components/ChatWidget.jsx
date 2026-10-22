import { useState } from "react";
import { IconChat, IconClose } from "./Icons";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="chat-panel">
          <div className="chat-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>💬 লাইভ সাপোর্ট</span>
            <button aria-label="Close" onClick={() => setOpen(false)} style={{ color: "#fff" }}>
              <IconClose size={18} />
            </button>
          </div>
          <div className="chat-body">
            আসসালামু আলাইকুম! 👋 কোর্স, বই বা অর্ডার সম্পর্কে জানতে চান? আমরা এখানে আছি
            আপনার সেবায়।
          </div>
          <div className="chat-actions">
            <span className="chat-chip">📱 অ্যাপ সম্পর্কে</span>
            <span className="chat-chip">📚 কোর্স সিলেক্শন</span>
            <span className="chat-chip">🚚 ডেলিভারি</span>
          </div>
        </div>
      )}

      <button className="chat-fab" aria-label="Chat" onClick={() => setOpen((v) => !v)}>
        {open ? <IconClose size={24} /> : <IconChat size={26} />}
      </button>
    </>
  );
}
