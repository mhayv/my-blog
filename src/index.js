import { supabase } from './connection.js'

const {data: posts} = await supabase
    .from('posts')
    .select('*')

    document.querySelector("#posts").innerHTML = posts.map(post =>
        `
        <div class="card-container">
            <section class="card done">
               <a href="post.html?id=${post.id}">${post.title}</a>
            </section>
        </div>
        
        `
    ).join('')