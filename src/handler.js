const handler = (req, res) => {
  const { url, method } = req;
  console.log({ url, method });

  res.end('You are accessing my web api🔥🔥🔥');
};

export default handler;
