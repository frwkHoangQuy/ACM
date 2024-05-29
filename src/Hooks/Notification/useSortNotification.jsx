const method = {
  "newest_to_oldest": ["time", 1],
  "oldest_to_newest": ["time", -1],
  "label_asc": ['type', 1],
  "label_desc": ['type', -1],
  "sender_asc": ['sender', 1],
  "sender_desc": ['sender', -1]
};

export const useSortNotifications = (notifications, sortMethod) => {
  // Kiểm tra hợp lệ cho sortMethod
  if (!method.hasOwnProperty(sortMethod)) {
    console.error('Invalid sort method');
    return notifications;
  }

  // Lấy thuộc tính và hướng sắp xếp từ method
  const [attribute, order] = method[sortMethod];

  // Hàm sắp xếp
  const compareFunction = (a, b) => {
    const comparison = b[attribute].localeCompare(a[attribute]);

    // Điều chỉnh kết quả sắp xếp dựa trên hướng
    return comparison * order;
  };

  // Sắp xếp thông báo và trả về kết quả
  return [...notifications].sort(compareFunction);
};
