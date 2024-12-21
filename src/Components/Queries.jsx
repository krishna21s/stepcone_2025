import React, { useState, useEffect } from "react";
import './Queries.css';
import axios from "axios";

const AdminPage = () => {
    // Sample state to hold query data
    const [storedQueries, setStoredQueries] = useState([]);
    const [queryReplyData, setQueryReplyData] = useState([]);
    const [queryReply, setQueryReply] = useState("");
    // Function to handle reply submission
    const handleReply = (query, email, username) => {
        if (queryReply == "") {
            alert("Please enter a reply");
            return;
        }
        setQueryReplyData(
            {
                query: query,
                email: email,
                username: username,
                reply: queryReply
            }
        );
        alert("Reply sent!");
    };
    console.log("this is query data", queryReplyData);

    // // Function to handle query resolution
    // const handleResolve = (id) => {
    //     const updatedQueries = queries.map((query) =>
    //         query.id === id ? { ...query, status: "Resolved" } : query
    //     );
    //     setQueries(updatedQueries);
    //     alert("Query marked as resolved!");
    // };


    const StoredQueries = async () => {
        const replyData = {
            "raisedQuery": queryReplyData.query,
            "email": queryReplyData.email,
            "reply": queryReplyData.reply,
            "username": queryReplyData.username
        }
        console.log(replyData)
        const response = await axios.post("/api/stepcone_backend/sc_queries_admin.php", replyData);
        console.log("this is response", response.data);
        setStoredQueries(response.data.allQueriesData);
    }

    useEffect(
        () => {
            StoredQueries();
        }, [queryReplyData])

    return (

        <div className="queries-main bg-dark">
            <div className="container-fluid d-flex flex-column justify-content-start rounded-5 queries-container">
                <h2 className="text-center queries-db-hdng mb-4 border-bottom border-warning">Queries Here</h2>
                <div className="queries-table-wrapper">
                    <table className="table queries-table-list table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Query</th>
                                <th>Reply</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {
                            storedQueries && (
                                <tbody className="table-dark">
                                    {storedQueries.map((query, index) => (
                                        <tr key={query.id}>
                                            <td>{index + 1}</td>
                                            <td>{query.username}</td>
                                            <td>{query.email}</td>
                                            <td>{query.mobile}</td>
                                            <td className="overflow-auto w-25">{query.query}</td>
                                            <td>
                                                <textarea
                                                    className="form-control q-reply-txtarea bg-secondary text-light"
                                                    required
                                                    onChange={(e) => setQueryReply(e.target.value)}
                                                    rows="3"
                                                    placeholder="Type your reply..."
                                                />
                                            </td>
                                            <td>
                                                <span
                                                    className={`badge ${query.status == "0"
                                                        ? "bg-warning text-dark"
                                                        : "bg-success"
                                                        }`}
                                                >
                                                    {query.status == "0" ? "Pending" : "Done"}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <button
                                                        className="btn btn-primary btn-sm send-query-reply-btn p-1"
                                                        onClick={() => handleReply(query.query, query.email, query.username)}
                                                        disabled={query.status === "Resolved"}
                                                    >
                                                        Send Reply
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            )
                        }
                    </table>
                </div>
                {
                    !storedQueries && (
                        <div className="text-center mt-5">No queries to display</div>
                    )
                }
            </div>
        </div>

    );
};

export default AdminPage;