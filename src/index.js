import { supabase } from './connection.js'

const {data: posts} = await supabase
    .from('posts')
    .select('*')
    .order('week', { ascending: true });


    document.querySelector("#posts").innerHTML = `
    <div class="card-container">
        ${posts.map(post => `
            <section class="card done">
               <a href="post.html?id=${post.id}">${post.week} - ${post.title}</a>
            </section>
        `).join('')}
    </div>
`;