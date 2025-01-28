import React from "react";
import Table from "./Table";
import data from "../hooks/data";

const CreateTable = () => {
  const columns = ["User", "Event", "Date/Time"]; // Table header columns

  return (
    <div>
      <h1>Activity log</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default CreateTable;
