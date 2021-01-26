
document.getElementById('update-button').addEventListener('click', async () => {
  let updateButton = document.getElementById('update-button')
  let selector = document.getElementById('server-selector')
  let launchButton = document.getElementById('launch-button')
  if (updateButton.textContent === "Update") {
    updateButton.disabled = true
    launchButton.disabled = true
    selector.disabled = true
    await new Promise(r => setTimeout(r, 500));
    updateButton.disabled = false
    updateButton.textContent = "Stop"
  } else {
    updateButton.textContent = "Update"
    launchButton.disabled = false
    selector.disabled = false
  }
})

document.getElementById('launch-button').addEventListener('click', async () => {
  let launchButton = document.getElementById('launch-button')
  launchButton.disabled = true
  await new Promise(r => setTimeout(r, 2000));
  launchButton.disabled = false
})