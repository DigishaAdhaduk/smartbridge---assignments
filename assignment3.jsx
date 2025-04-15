import { useState } from "react";

// 1. TextUpdater Component
function TextUpdater() {
  const [text, setText] = useState("");

  return (
    <div className="p-4">
      <input 
        type="text" 
        className="border p-2 w-full" 
        placeholder="Type something..." 
        value={text} 
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
}

// 2. Form Component
function SimpleForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Value:", inputValue);
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="border p-2 w-full" 
        placeholder="Enter text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 mt-2 w-full" type="submit">Submit</button>
    </form>
  );
}

// 3. UserCard Component
function UserCard({ name, email }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

// 4. Button Component
function CustomButton() {
  return (
    <button 
      className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
      onClick={() => console.log("Button clicked!")}
    >
      Click Me
    </button>
  );
}

// 5. LoginForm Component
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form className="p-4 border rounded-lg shadow-md" onSubmit={handleSubmit}>
      <input 
        type="email" 
        className="border p-2 w-full mb-2" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        className="border p-2 w-full mb-2" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 w-full">Login</button>
    </form>
  );
}

export { TextUpdater, SimpleForm, UserCard, CustomButton, LoginForm };
