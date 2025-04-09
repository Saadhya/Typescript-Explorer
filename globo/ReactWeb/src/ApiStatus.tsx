type Args = {
  status: "success" | "pending" | "error";
};

const ApiStatus = ({ status }: Args) => {
  switch (status) {
    case "pending":
      return <div className="alert alert-info">Loading...</div>;
    case "error":
      return <div className="alert alert-danger">Error loading data</div>;

    default:
      throw Error("Invalid status value: " + status);
  }
};

export default ApiStatus;
