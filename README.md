gsap :-
- to: animates intial state to final state - (from default values to defined values).       
- from : vice-versa (starts with defined value  and animate towards default value ) .
- timeline  : to control the order and timing of multiple animations.
- stagger : to spread out the start times of multiple elements being animated together.
- scrolltrigger : animation on scroll.  - trigger , scroller , markers , start , end    scrub , pin , horizontal scroll - transform: "translateX(-120%)"

Locomotive.js :-
- for smooth scrolling .
- need perfect structure .
- need a wrapper div .
- 2 CDN - .js  &  .css    (in script ele of body tag  & link ele in head tag) .
- to control the scrolling of particular elements there are attributes for locomotive.js
  in guthub page which can be added to the html elements directly  like : data-scroll
  data-scroll-speed = somevalue .........

~>   locomotive.js   with  scrolltrigger
- with loco , it will hijack the complete scrolling of the webpage bcz of which scrolltrigger applied to the elements will no animate . 

To solve this :-
- locomotive scrolltigger codepen in website -> copy the js code -> paste @ top of the 
js code  ->  Delete the red/orange/purple panel along with next 3 lines of code  -> then
select using ctrl+d all the .smooth-scroll thing and repalce it with #main what ever is
the id of the wrapper div given  ->  change the scroller property to #main (when using
locomotive if not "body") .