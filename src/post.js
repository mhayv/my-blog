import { supabase } from './connection.js';

async function loadPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const currentWeek = urlParams.get('week') || '1';


  const navLinks = document.querySelectorAll('#week-nav a');
  navLinks.forEach(link => {
    const linkWeek = new URL(link.href).searchParams.get('week');
    if (linkWeek === currentWeek) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });


  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('week', currentWeek)
    .limit(1);

  const postContainer = document.querySelector('#post');

  if (error) {
    postContainer.innerHTML = `<p>Error loading post data.</p>`;
    return;
  }

  if (!posts || posts.length === 0) {
    postContainer.innerHTML = `<p>No post found for Week ${currentWeek}.</p>`;
    return;
  }

  const post = posts[0];

  postContainer.innerHTML = `
    <h2>${post.title}</h2>
    <h3>1. What went well in the design process?</h3>
    <p class="small">${post.went_well}</p>

    <h3>2. Did you accomplish your sprint goal? Why/Why not?</h3>
    <p class="small">${post.accomplish}</p>

    <h3>3. What didn't go well in the design process?</h3>
    <p class="small">${post.unwell}</p>

    <h3>4. What can be improved? What lessons have you learnt?</h3>
    <p class="small">${post.improve}</p>

    <h3>5. What actions will I take for the next sprint?</h3>
    <p class="small">${post.next_sprint}</p>

    <h2>Week ${post.week} Daily Stand Ups</h2>
    <h4 class="small">'What did I do yesterday, What I will do today, Impediments and blockers?'</h4>

    <h3>Monday</h3>
    <p class="small">${post.monday}</p>

    <h3>Tuesday</h3>
    <p class="small">${post.tuesday}</p>

    <h3>Wednesday</h3>
    <p class="small">${post.wednesday}</p>

    <h3>Thursday</h3>
    <p class="small">${post.thursday}</p>

    <h3>Friday</h3>
    <p class="small">${post.friday}</p>
  `;
}

loadPost();
