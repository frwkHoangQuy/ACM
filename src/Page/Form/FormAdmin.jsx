import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';

const FormAdmin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Giả sử có một hàm fetchData để lấy dữ liệu từ API
    // fetchData().then(result => setData(result));
    // Trong trường hợp này, tạm thời sử dụng dữ liệu cố định
    const sampleData = [
      {
        id: "f4c5a6d7-8901-2131-4151-617182220212",
        title: "Đề nghị tăng ca cuối tuần",
        content: "Tôi đề nghị tăng ca vào cuối tuần để hoàn thành dự án.",
        status: "Pending",
        created_at: "2024-06-01T00:31:38Z",
        employee: "21520425",
        type: "f2c3a4d5-6789-0112-2131-415161718192"
      },
      // Các mục dữ liệu khác
    ];
    setData(sampleData);
  }, []);

  const handleApprove = (record) => {
    // Xử lý logic khi nhấn nút phê duyệt
    console.log("Approved:", record);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => {
        if (record.status === 'Pending') {
          return (
            <Button onClick={() => handleApprove(record)}>Phê duyệt</Button>
          );
        }
        return null; // Nếu status không phải là Pending, không cần hiển thị nút
      },
    },
  ];

  return (
    <Table dataSource={data} columns={columns} />
  );
};

export default FormAdmin;
