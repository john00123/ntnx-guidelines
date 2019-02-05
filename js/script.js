const category = ['geometry','transportation','infrastructure','miscelaneous','tools', 'signs', 'interface','buildings']

const color = ['red','blue']

category.map(element =>$('body').append(
  ` <h3 class='title'>${element}</h3>
    <div class='${element} grid'></div>`
));

$(document).ready(function() {

  category.map(element =>{

    var folder = `../img/${element}`;

    $.ajax({
        url : folder,
        success: function (data) {
          console.log('success');
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|svg)$/) ) {
                    $(`.${element}`).append( `<a href="${val}" download> <div class='image ${element}-child' style='
                      background-color: #F2F4F6;
                      width:100%;
                      background-image:url(${val});
                      background-size: auto;
                      background-repeat: no-repeat;
                      background-position: center;
                    '><button>${val
                      .replace('/img','')
                      .replace(`${element}`,'')
                      .replace(`/`,'')
                      .replace(`/`,'')
                      .replace(`_`,' ')
                    }</button></div></a>` );
                }
            });
        }
    });

  });



  $('body').prepend(`
    <h1> Illustration Guidelines</h1>
    <p>
      Nutanix UI tries to have a clean tone overall. The illustration styles should be matching the UI, which is clean, refreshing and delightful.
    </p>
    <br>

    <div class='guide'>

      <h3>Color</h3>
      <p>
        The top row is used for the core strokes of an object and for showing motion and connecting lines.
        Rows two and three are used for dotted and solid lines on the ground respectively.
        Shading for an object can use any row other than the top; though be mindful of lighting (see next section).
      </p>
      <div class='section'>
        ${color.map(value=>`<div class='circle' style='background:${value}'></div>`).join().replace(',','')}
      </div>
      <p>
      When using color, be wary of any connotations that certain shades may have; the majority of illustrations will have a grey base.
      Highlight areas of interest within an illustration using a non-grey shade.
      Only use one set of shades for a color per object.
      </p>
    </div>
    <div class='guide'>
      <h3>Stroke</h3>

      <p>
      The majority of illustrations can be created using a stroke width of 2 pixels; for more extreme cases view page ‘Scaling’ (9).
      Use lighter strokes to add detail within objects where appropriate.
      Alter dash settings for strokes within objects to add areas of interest.
      Use standard dashed strokes settings to show motion trails and lines connecting objects.
      For strokes on the floor plane, use lighter shades; with dashed lines being a shade darker than solid lines (see ‘Color’, (2) ).
      </p>
      <p>
      Dashed strokes are created using a gap of 6 pixels and a stroke width of 0 pixels in the dashed line settings within Illustrator.
      Avoid harsh edges for connecting vertices or for separating surfaces of softer objects.
      Use lighter shades when connecting objects or alluding to a form of assembly / structure.
      </p>
    </div>


    <div class='guide'>
      <h3>Lighting</h3>

      <p>
      Lighting can help differentiate objects within a scene; feel free to experiment with different shades with a single palette to see what works best when applied to that scene.
      Adhere to the concept of a uniform single light source hitting all objects at the angle shown.
      Use an alternate shade to show the lighting of a curved object.
      Choose lighter shades for strokes when showing edges of an object through a transparent surface.
      Only cast shadows within objects if needed; never on to the ground or on to other objects.
      </p>
    </div>

    <div class='guide'>
      <h3>Construct</h3>

      <p>
      Create objects using the rotate / shear method or the rotate / scale method depending on the object and context in question.
      Adhere to the idea of all objects being aligned to an isometric grid.
      Be sure to define the ground plane if creating an illustration with multi- ple objects.
      If two objects of different colours are touching, the top and / or front object’s stroke must be visible.
      Use angles of 30 degree increments if showing the motion of two objects being connected.
      </p>

      <p>
      When constructing a new object, be sure to reference existing illustrations and the object library as a reference or potential cornerstone for the new creation.
      Align any connecting lines or associated objects to the centre edge of the object.
      Leave a spacing of four or more pixels between objects or lines on the same plane.
      Exaggerate proportions of objects in smaller illustrations to improve visibility.
      Simplify elements of objects that may create visual clutter even if untrue to actual form.
      </p>
    </div>


    <div class='guide'>
      <h3>Scaling</h3>

      <p>
      Create objects using the rotate / shear method or the rotate / scale method depending on the object and context in question.
      For complex scenes involving small objects, shading can be limited to reduce visual clutter.
      Objects should use a two pixel stroke between the lower (20 pixel width) and upper (400 pixel width) extremities of a single object. When one object in the scene exceeds an extremity, the entire scene must be adjusted to the new stroke width.
      </p>
    </div>

    `)
});
