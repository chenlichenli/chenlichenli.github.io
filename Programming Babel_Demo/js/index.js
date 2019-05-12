const hackyWords = document.querySelector('#hacky-words')

const code = `
a x
  @ M V(500):
    h(@)
    N(91)

  x.w(b)
  x.u()

  @ = 0
  ^ = 0
  @e = 3
  ~e = 3
  @o = x.z_y() / 2
  ~o = x.z_K() / 2

  d p():
    i @, ^, @e, ^e
    @ = @ + @e
    ^ = ^ + ^e
    l Q - @o < @ < @o:
      @e = -@e
    l Q - ^o < ^ < ^o:
      ^e = -^e
    x.j(@,^)
    x.R(P,5)

  x.R(P,5)
  x.g()

  a x

  S = x.x()
  S.tc(b)

  @ m v(50):
  s.h(50)
  s.n(123)

  x.f()

  a x
  x.w(b)
  x.u()

  @ = 0
  ^ = 0
  @e = 3
  ~e = 3
  @o = x.z_y() / 2
  ~o = x.z_K() / 2

  d p():
    i @, ^, @e, ^e
    @ = @ + @e
    ^ = ^ + ^e

    l Q - @o < @ < @o:
      @e = -@e
    l Q - ^o < ^ < ^o:
      ^e = -^e
    x.j(@,^)
    x.R(P,5)

  x.R(P,5)
  x.g()


  a x
  x.w(b)
  x.u()

  @ = 0
  ^ = 0
  @e = 3
  ~e = 3
  @o = x.z_y() / 2
  ~o = x.z_K() / 2

  d p():
    i @, ^, @e, ^e
    @ = @ + @e
    ^ = ^ + ^e

    l Q - @o < @ < @o:
      @e = -@e
    l Q - ^o < ^ < ^o:
      ^e = -^e
    x.j(@,^)
    x.R(P,5)

  x.R(P,5)
  x.g()

  a x
  x.w(b)
  x.u()

  @ = 0
  ^ = 0
  @e = 3
  ~e = 3
  @o = x.z_y() / 2
  ~o = x.z_K() / 2

  d p():
    i @, ^, @e, ^e
    @ = @ + @e
    ^ = ^ + ^e

    l Q - @o < @ < @o:
      @e = -@e
    l Q - ^o < ^ < ^o:
      ^e = -^e
    x.j(@,^)
    x.R(P,5)

  x.R(P,5)
  x.g()

  a x
  x.w(b)
  x.u()

  @ = 0
  ^ = 0
  @e = 3
  ~e = 3
  @o = x.z_y() / 2
  ~o = x.z_K() / 2

  d p():
    i @, ^, @e, ^e
    @ = @ + @e
    ^ = ^ + ^e

    l Q - @o < @ < @o:
      @e = -@e
    l Q - ^o < ^ < ^o:
      ^e = -^e
    x.j(@,^)
    x.R(P,5)

  x.R(P,5)
  x.g()

  a x
  h(100)
  n(90)
  h(100)

  @ M V(500):
    h(i)
    N(91)

  x.w(b)
  x.u()

  @ = 0
  ^ = 0
  @e = 3
  ~e = 3
  @o = x.z_y() / 2
  ~o = x.z_K() / 2

  d p():
    i @, ^, @e, ^e
    @ = @ + @e
    ^ = ^ + ^e

    l Q - @o < @ < @o:
      @e = -@e
    l Q - ^o < ^ < ^o:
      ^e = -^e
    x.j(@,^)
    x.R(P,5)

  x.R(P,5)
  x.g()

  a x

  S = x.x()
  S.tc(b)

  @ m v(50):
  s.h(50)
  s.n(123)

  x.f()

  a x
  x.w(b)
  x.u()

  @ = 0
  ^ = 0
  @e = 3
  ~e = 3
  @o = x.z_y() / 2
  ~o = x.z_K() / 2

  d p():
    i @, ^, @e, ^e
    @ = @ + @e
    ^ = ^ + ^e

    l Q - @o < @ < @o:
      @e = -@e
    l Q - ^o < ^ < ^o:
      ^e = -^e
    x.j(@,^)
    x.R(P,5)

  x.R(P,5)
  x.g()


  a x
  x.w(b)
  x.u()

  @ = 0
  ^ = 0
  @e = 3
  ~e = 3
  @o = x.z_y() / 2
  ~o = x.z_K() / 2

  d p():
    i @, ^, @e, ^e
    @ = @ + @e
    ^ = ^ + ^e

    l Q - @o < @ < @o:
      @e = -@e
    l Q - ^o < ^ < ^o:
      ^e = ^e
    x.j(@,^)
    x.R(P,5)

  x.R(P,5)
  x.g()

  a x
  x.w(b)
  x.u()

  @ = 0
  ^ = 0
  @e = 3
  ~e = 3
  @o = x.z_y() / 2
  ~o = x.z_K() / 2

  d p():
    i @, ^, @e, ^e
    @ = @ + @e
    ^ = ^ + ^e

    l Q - @o < @ < @o:
      @e = @e
    l Q - ^o < ^ < ^o:
      ^e = ^e
    x.j(@,^)
    x.R(P,5)

  x.R(P,5)
  x.g()

  a x
  x.w(b)
  x.u()

  @ = 0
  ^ = 0
  @e = 3
  ~e = 3
  @o = x.z_y() / 2
  ~o = x.z_K() / 2

  d p():
    i @, ^, @e, ^e
    @ = @ + @e
    ^ = ^ + ^e

    l Q - @o < @ < @o:
      @e = -@e
    l Q - ^o < ^ < ^o:
      ^e = -^e
    x.j(@,^)
    x.R(P,5)

  x.R(P,5)
  x.g()

  a x
  h(100)
  n(90)
  h(100)

`

let codeIndex = 0;
const chars = 3;

hackyWords.addEventListener('keydown',function(event){
  event.preventDefault();

  hackyWords.value += code.slice(codeIndex, codeIndex + chars);
  codeIndex += chars;
  hackyWords.scrollTop = hackyWords.scrollHeight;
  
})














