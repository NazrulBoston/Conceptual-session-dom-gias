/**
 * html ar sabgulo button ar moddhe ai function ke call kara hoese function ta kivabe kora hoese 
 * ta niche ullekh kara holo:
 * 1. prothome html function ar moddhe this namer keyword dea hoese and oi this dara target ke bujhano hoese
 * ai function ar moddhe target parameter die seta ke accept kara hoese. then console.log(target.parentNode.childNodes[1].innerTex)
 * ai vabe akta step kara hoese and console kare dekha hoese pai kina then console kete akta ItemName namer variable rakha
 * hoese. 
 * 2. tarpor createElement die li create kare tar innerText rakaha hoese ItemName ar moddhe then
 * jkhane oi li list ta rakha hobe oikhan kar div ar id selected-items k dhore upore akta variable ar moddhe
 * rakha hoese 
 * 3. then oi variable ar sathe appendChild kara hoese ai list ar li k
 * 4. console.log(target.parentNode.childNodes[5].innerText.split(' ')[3]) ai vabe console kare and split kare 
 * innerText ar man k separate kare just amount ke ber kara hoese
 * 5. then amdr sum karte hobe ar jonno function ar upore akta global variable let total = 0 decalare kare
 * niche arek ta total ar moddhe rekhe parseFloat kare jog kara hoese ai jogfol console dekha jabe 
 * 6. then hlml ar jekhaen ai total value rakha hobe tar id nie dhore tar innerText ar moddhe ai text ta total ta
 * value hisebe set kare dite hobe
 */


let total = 0;
function handleClickBtn(target) {
    const selectedItems = document.getElementById('selected-items');
    //step 1
    const ItemName = target.parentNode.childNodes[1].innerText;
    //step 2
    const li = document.createElement('li');
    li.innerText = ItemName;
    //step 3
    selectedItems.appendChild(li);
    //step 4
    const flowerPrice = target.parentNode.childNodes[5].innerText.split(' ')[2];
    
    //step 5
    // total = parseFloat(total) + parseFloat(flowerPrice);
    total = total + parseFloat(flowerPrice);
    //step 6
     document.getElementById('total-price').innerText = total;

   

}