export default function BooksPage() {
 return (
   <section>
     <h1 className="font-bold text-3xl font-serif">2023 Reading List</h1><br />
     <p> and my favourite line from each book...</p>
     <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
       <hr />
       <ol>
           <li><h5><b>Tomorrow, and Tomorrow, and Tomorrow</b> by <i>Gabrielle Zevin</i></h5></li>
           <p> <i>“There is a time for any fledgling artist where one's taste exceeds one's abilities.
                The only way to get through this period is to make things anyway.” </i></p>
           <li><h5><b>I Want to Die But I Want to Eat Tteokbokki</b> by <i>Baek Sehee</i></h5></li>
           <p><i>"This book, therefore, ends not with answers but with a wish. 
               I want to love and be loved. I want to find a way where I don't hurt myself. 
               I want to live a life where I say things are good more than things are bad. 
               I want to keep failing and discovering new and better directions. 
               I want to enjoy the tides of feeling in me as the rhythms of life. 
               I want to be the kind of person who can walk inside the vast darkness and 
               find the one fragment of sunlight I can linger in for along time.
               <br></br>Some day, I will."</i></p>
           <li><h5><b>The Midnight Library </b> by <i>Matt Haig</i></h5></li>
           <p> <i>“Maybe that’s what all lives were, though. Maybe even the most seemingly perfectly intense or worthwhile lives ultimately felt the same. Acres of disappointment and monotony and hurts and rivalries but with flashes of wonder and beauty. Maybe that was the only meaning that mattered. To be the world, witnessing itself.” </i></p>
           <li><h5><b>The Song of Achilles</b> by <i>Madeline Miller</i></h5></li>
           <p> <i>“Have you no more memories?' I am made of memories.” </i></p>
           <li><h5><b>Hyperbole and a half</b> by <i>Allie Brosh</i></h5></li>
           <p> <i>“And even if everything still seems like hopeless bullshit, maybe it’s just pointless bullshit or weird bullshit or possibly not even bullshit.”</i></p>  
       </ol>
     </div>
   </section>
 );
}
