import Navbar from "../components/Navbar";

const AddEvent = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow mt-16">
        <iframe
          className="airtable-embed w-full h-full"
          src="https://airtable.com/embed/app0AIOqiiAeI12kU/shr3qXkK8F3bhJb9x?backgroundColor=cyan"
          frameBorder="0"
          style={{
            background: "transparent",
            border: "1px solid #ccc",
            minHeight: "calc(100vh - 4rem)", // Assuming the Navbar is 64px tall
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default AddEvent;
