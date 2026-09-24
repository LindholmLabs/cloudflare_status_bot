

export default {
  async fetch(request) {
    const urls = parseUrlsFromEnv();
    const now = new Date();
    let output = "";

    for (const url of urls) {
      output += `<tr><td>${url}</td><td>${await(responseIsOk(url))}</td></tr>`
    }

    const html = `<!DOCTYPE html>
		<body>
		  <h1>STATUS</h1>
      <table>
        <tr>
          <td>Source</td>
          <td>Status</td>
        </tr>
		    ${output}
      </table>
      <p>Last updated: ${now.toISOString()}</p>
		</body>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};

function parseUrlsFromEnv() {
  const urls = process.env.URLS || "";
  return urls.split(",");
}

async function responseIsOk(url) {
  try {
    const response = await fetch(url, { redirect: "follow" });
    if (response.status < 500) {
      return "<span style='color:green;'>online</span>";
    }
    return "<span style='color:red;'>offline</span>";
  } catch {
    return "<span style='color:red;'>offline</span>";
  }
}