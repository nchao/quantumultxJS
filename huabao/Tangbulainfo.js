let body = $response.body;

try {
  let data = JSON.parse(body);
  
  // 修改出参内容
  data.success = true;
  data.code = 0;
  data.msg = "";
  data.data = true;
  
  // 转换回字符串
  body = JSON.stringify(data);
} catch (error) {
  console.log("解析出参失败: " + error.message);
}

$done({ body });