import { supabase } from './connection.js'

const pageID = new URLSearchParams(window.location.search).get('id')

const {data: posts} = await supabase
    .from('posts')
    .select('*')
    .eq('id',pageID) //Where 'id' = pageID


    document.querySelector("#post").innerHTML = posts.map(post =>
        `
        <h2>${post.title}</h2>
        <h3>1. What went well in the design process?</h3>
        <p class="small">${post.went_well}</p>

        <h3>2. Did you accomplish your sprint goal? Why/Why not?</h3>
        <p class="small">${post.accomplish} </p>

        <h3>3. What didn&#39;t go well in the design process?</h3>
        <p class="small">${post.unwell}</p>

        <h3>4. What can be improved? What lessons have you learnt?</h3>
        <p class="small">${post.improve}</p>

        <h3>5. What actions will I take for the next sprint?</h3>
        <p class="small">${post.next_sprint}</p>



        <h2>Week One Daily Stand Ups</h2>
        <h4 class="small">&#39;&#39;What did I do yesterday, What I will do today, Impediments and blockers?&#39;&#39;
        </h4>

        <h3>Monday</h3>
        <p class="small">${post.monday} </p>

        <h3>Tuesday</h3>
        <p class="small">${post.tuesday} </p>

        <h3>Wednesday</h3>
        <p class="small">${post.wednesday} </p>

        <h3>Thursday</h3>
       <p class="small">${post.thursday} </p>

        <h3>Friday</h3>
        <p class="small">${post.friday} </p>

        `
    ).join('')