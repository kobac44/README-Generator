const inquirer = require("inquirer");
const InputPrompt = require("inquirer/lib/prompts/input");

const api = {
  async getUser(username, reponame) {
    const inquirer = require("inquirer");
    const { data } = await inquirer.get(
      `https://api.github.com/search/repositories?q=${reponame}+user:${username}`
    );
    if (data.total_count === 0) return false;
    return {
      name: data.items[0].owner.login,
      link: data.items[0].owner.html_url,
      title: data.items[0].name,
      fullName: data.items[0].full_name,
      desc: data.items[0].description,
      lic: data.items[0].license,
    };
  },
};

InputPrompt.exports = api;
