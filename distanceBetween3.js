const dist_2 = (x1, y1, x2, y2) => {
  const difx = Math.pow(x2 - x1, 2);
  const dify = Math.pow(y2 - y1, 2);
  return Math.sqrt(difx + dify);
};

const avg_dist_3 = (x1, y1, x2, y2, x3, y3) => {
  const dif12 = dist_2(x1, y1, x2, y2);
  const dif13 = dist_2(x1, y1, x3, y3);
  const dif23 = dist_2(x2, y2, x3, y3);
  return (dif12 + dif13 + dif23) / 3; //Average of the three distances.
};
