const citations = [
    ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
    ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
    ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
    ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
    ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
    ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
    ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
    ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
    ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
    ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
    ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
    ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
    ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
    ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
    ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
    ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
    ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
    ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
    ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
    ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"],
    ["Amour liberté vérité Il faudra choisir Amour liberté vérité Plutôt qu'obéir.", "Pierre Perret"],
    ["La vie n'est pas un cadeau mais une aventure à vivre.", "Michineau Cédric"],
    ["Le souvenir du bonheur n'est plus du bonheur ; le souvenir de la douleur est de la douleur encore.", "George Gordon Byron"],
    ["L'amour est le seul moyen de rester vivant.", "Gaëtan Faucer"],
    ["Si tu veux connaître quelqu'un n'écoute pas ce qu'il dit, mais regarde ce qu'il fait.", "Dalai Lama"],
    ["Le but de l'ambition est comme l'horizon, il recule à mesure qu'on avance.", "Chauvot de Beauchêne"],
    ["La sincérité est à l'amitié ce que le ciment est au mortier", "Taha-Hassine Ferhat"],
    ["Nous devons apprendre à vivre ensemble comme des frères, sinon nous allons mourir tous ensemble comme des idiots.", "Martin Luther King"],
    ["Le sens de la vie c'est apprendre toujours, apprendre et transmettre parce que transmettre c'est donner, donner c'est aider, aider c'est avancer, avancer c'est grandir.", "Zineve"],
    ["Ce qui me fait peur ce n'est pas la méchanceté des méchants mais le silence des justes.", "Gandhi"],
    ["Il n'existe rien de constant si ce n'est le changement.", "Bouddha"],
    ["Aimer, c'est savoir dire je t'aime sans parler.", "Victor Hugo"],
    ["Les ordinateurs sont inutiles. Ils ne savent que donner des réponses.", "Picasso"],
    ["Le succès n'est pas final. L'echec n'est pas fatal. C'est le courage de continuer qui compte.", "Churchill"],
    ["L'argent ne fait pas le bonheur, mais le bonheur ne remplit pas l'assiette.", "Booba"],
    ["Le monde ne sera pas détruit par ceux qui font le mal, mais par ceux qui les regardent sans rien faire.", "Albert Einstien"],
    ["Quand j'étais petit à la maison, le plus dur c'était la fin du mois... Surtout les trente derniers jours !", "Coluche"],
    ["La vie est un défi à relever, un bonheur à mériter, une aventure à tenter.", "Mère Teresa"],
    ["L'ignorant affirme, le savant doute, le sage réfléchit.", "Aristote"],
    ["Quand on veut on peut, quand on peut on doit.", "Napoléon Bonaparte"],
    ["Ne vis pas pour que ta présence se remarque, mais pour que ton absence se ressente.", "Bob Marley"],
    ["Moi je n'ai confiance qu'en mon manche et ma parole... l'une est de fer et l'autre d'acier !", "Tony Montana"],
  ];

function generateCitation()
{
  if( document.contains( document.getElementById( 'citation' ) ) )
  {
    document.getElementById( 'citation' ).remove();
  }

  let random = Math.floor( Math.random() * ( ( citations.length - 1 ) - 0 ) + 0 );
  let element = citations[ random ][ 0 ];
  let author = citations[ random ][ 1 ];
  let bloc = document.getElementById( 'gen-citation' );
  let generate = document.createElement( 'blockquote' );
  let p = document.createElement( 'p' );
  let figcaption = document.createElement( 'figcaption' );
  let content = document.createTextNode( '"' + element + '"' );

  generate.setAttribute( 'id', 'citation' );
  p.appendChild( content );
  generate.appendChild( p );
  figcaption.appendChild( document.createTextNode( ' — ' + author ) );
  generate.appendChild( figcaption );
  bloc.appendChild( generate, bloc.firstChild );
}

function search()
{
    let input = document.getElementById( 'filtre' ).value;
    let ul = document.createElement( 'ul' );
        ul.setAttribute( 'id', 'liste' );
    let btn = document.getElementById( 'btn-filter' );
    
    if( document.contains( document.getElementById( 'liste' ) ) )
    {
        document.getElementById( 'liste' ).remove();
    }

    for (let i = 0; i < citations.length; i++) {
        let li = document.createElement( 'li' );

        if ( citations[i][0].toLowerCase().includes( input.toLowerCase() ) || citations[i][1].toLowerCase().includes( input.toLowerCase() ) ) {
            li.appendChild( document.createTextNode( citations[ i ][ 0 ] ) );
            ul.appendChild( li );
        }
    }

    btn.after( ul );
}