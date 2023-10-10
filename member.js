function skillsMember() {
  const member = document.querySelector('.member');
  if (!member) return;

  const skills = member.querySelectorAll('.skills');
  const skillsArray = Array.from(skills);

  skillsArray.forEach((skill) => {
    const skillValue = skill.querySelector('.skill-value');
    const skillValueWidth = skillValue.dataset.value;
    skillValue.style.width = `${skillValueWidth}%`;
  });
}   