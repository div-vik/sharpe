import * as React from "react";

const columns = [
  { id: "id", header: "ID" },
  { id: "title", header: "Title" },
  { id: "body", header: "Body" },
];

const Table = ({ posts }) => {
  return (
    <>
      <table className="w-full h-full">
        <thead className="">
          <tr className="sticky top-0 z-10 bg-[#09090B] border-b-[1px] border-gray-500">
            {columns.map((column) => (
              <th key={column.id} className="py-2 px-5 text-[#999999]">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=" overflow-y-scroll">
          {posts.map((post) => {
            const { id, title, body } = post;

            return (
              <tr key={id}>
                <td className="px-5 text-[#999999] border-b-[1px] border-gray-500">
                  {id}
                </td>
                <td className="px-5 text-[#999999] border-b-[1px] border-gray-500">
                  {title}
                </td>
                <td className="px-5 text-[#999999] border-b-[1px] border-gray-500">
                  {body}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
