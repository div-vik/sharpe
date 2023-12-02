import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";
import * as d3 from "d3";

const Data = () => {
  const [totalPosts, setTotalPosts] = useState(0);
  const [user1Posts, setUser1Posts] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = response.data;
        const totalPostsCount = data.length;
        const user1Posts = data.filter((post) => post.userId === 1);
        setTotalPosts(totalPostsCount);
        setUser1Posts(user1Posts);
        setChartData([
          { label: "User 1 Posts", value: user1Posts.length },
          {
            label: "Other Users Posts",
            value: totalPostsCount - user1Posts.length,
          },
        ]);
      } catch (error) {
        console.error(error.message());
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartData.length > 0) {
      drawPieChart(chartData);
    }
  }, [chartData]);

  const drawPieChart = (data) => {
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const pie = d3.pie();

    const arcs = d3.arc().innerRadius(0).outerRadius(radius);

    const path = svg
      .selectAll("path")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("d", arcs)
      .attr("fill", (d, i) => d3.schemeCategory10[i]);

    const labels = svg
      .selectAll("text")
      .data(pie(data))
      .enter()
      .append("text")
      .attr("text-anchor", "middle")
      .attr("transform", (d) => `translate(${arcs.centroid(d)})`)
      .text((d) => `${Math.round((d.value / totalPosts) * 100)}%`);
  };

  return (
    <div className="absolute top-0 h-screen w-screen bg-[#09090B]">
      <div className="relative">
        <div className="w-full absolute top-28 h-[calc(100vh-7rem)] px-5 lg:px-24 xl:px-40 py-5 lg:py-10">
          <div className="flex justify-center w-full h-full items-center container mx-auto">
            <div className="bg-[#09090B] flex border-[1px] border-gray-500 rounded-lg w-full h-full">
              <div className="bg-[#09090B] w-[50%] border-r-[1px] border-gray-500 h-full overflow-y-scroll">
                {loading && (
                  <p className="w-full h-full flex justify-center items-center">
                    Loading...
                  </p>
                )}
                {!loading && <Table posts={user1Posts} />}
              </div>

              <div className="w-[50%] h-full">
                <h2 className="text-xl px-5 py-5">Posts by User ID 1</h2>
                {/* <div id="chart"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
