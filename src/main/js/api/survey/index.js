const basepath = "api";

export async function find(id) {
  const response = await fetch(`${basepath}/surveys/${id}`);

  return await response.json();
}

export async function findAll() {
  const response = await fetch(`${basepath}/surveys`);

  return await response.json();
}

export async function save(data) {
  const response = await fetch(`/${basepath}/surveys`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf8"
    },
    body: JSON.stringify(data)
  });

  return await response.json();
}
