document.getElementById('button').addEventListener('click', showGithubUser);
async function showGithubUser() {
  const username = document.getElementById('username').value;
  const url = `https://api.github.com/users/${username}?q=Q`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.message) {
      document.getElementById('res').innerHTML = `
          <h3>Profile not found</h3>
        `;
    } else {
      document.getElementById('res').innerHTML = `
          <img src="${data.avatar_url}">
          <p>${data.name} (${data.login})</p>
          <p>${data.location}</p>
          <p>${data.public_repos}</p>
        `;
    }
  } catch (e) {
    console.log(e);
  }
}