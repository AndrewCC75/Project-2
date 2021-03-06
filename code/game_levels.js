var GAME_LEVELS = [
  ["                                      !x                                                 ",
   "                                      !x                                                 ",
   "                           o   o      !x                                                 ",
   "                          xxxxxxxx  y !x                                                 ",
   "                                      !x                                                 ",
   "                                      !x                                                 ",
   "                                  y   !x                                   xxx           ",
   "                                      !x                    xx      xx    xx!xx          ",
   "                                      !x     o o      xx         w        x!!!x          ",
   "                                 y    !x                                  xx!xx          ",
   "                        w             !x    xxxxx                          x!x           ",
   "                        o           x!!x                                    !        xx  ",
   "xxx                               y xxxx           o o           w          !         x  ",
   "  x   y   !x                                      xxxxx                     !         x  ",
   "  x       !x          y    y                                                !       o x  ",
   "  xy      !x                     y                                          !         x  ",
   "  x  @ x!!!x       x!!!!!!!!!x                  y                         x ! x       x  ",
   "  xxxxxxxxxxxx  xxxx!!!!!!!!!xxxxxxx      yxxxxxxx        xxxxx     xxxxxxx ! xxxxxxxxx  ",
   "                   xxxxxxxxxxx  w        !!x     x!!!!!!      x     x       !            ",
   "                                        !!!x     x!!!!!!!     x!!!!!x       !            ",
   "                                      y!!!!x     x!!!!!!!!    x!!!!!x       !            ",
   "                                     yy!!!!x     xxxxxxx!!!   xxxxxxx       !            ",
   "              o                   !!!!!!!!!x            !!!                 !            ",
   "!!!!!!!!!!!!!!xxxxxxx!!!xxxxxxxxx!!xxxxxxxxx            !!!                 !           "],
  ["                                                                                                                ",
   "                                                                                                                ",
   "                                                                                                                ",
   "                                                   o       o                                                    ",
   "                                               xxxxxxxxxxxxxxxxxx                                               ",
   "                                              xxxxxxxxxxxxxxxxxxxx                                              ",
   "                                             xxxxxxxxxxxxxxxxxxxxxx                                             ",
   "                                            xxxxxxxxxxxxxxxxxxxxxxxx                                            ",
   "                                           xxxxxxxxxxxxxxxxxxxxxxxxxx                                           ",
   "                                          xxxxxxxxxxxxxxxxxxxxxxxxxxxx                                          ",
   "                                         xxxxxx      xxxxxxxxxxxxxxxxxx                                         ",
   "                                        xxxx         xxxxxxxxxxxxxxxxxxx                                        ",
   "                                       xxxxx         xxxxxxxxxxxxxxxxxxxx                                       ",
   "                                      xxxxx   xy     xxxxxxxxxxxxxxxxxxxxx                                      ",
   "                                     xxxxx    x      xxxxxxxxxxxxxxxxxxxxxx                                     ",
   "                                    xxxxx    xx      xxxxxxxo                                                   ",
   "                                   xxo      xxx  w  yxxxxxxx    w   o   w                                       ",
   "                                  xxx      xxxx      xxxxxxx       yyy       x                                  ",
   "                                 xxxxxxxxxxxxxx      xxxxxxx                 xx                                 ",
   "                                xxx xxxxxxxxxxxy     xxxxxxxy               yxxx                                ",
   "                               xxxx xxxxxxxxxxx  o   xxxxxxx    w   o   w    xxxx                               ",
   "                              xxxxx xxxxxxxxxxx   w  xxxxxxx       yyy       xxxxx                              ",
   "                             xxxx     xxxxxxxxx     yxxxxxxx                 xxxxxx                             ",
   "                            x   x     xxxxxxxxx      xxxxxxx                 xxxxxxx                            ",
   "                           xxo    xx    xxxxxxxy     xxxxxxxy               yxxxxxxxx                           ",
   "                          xxx     xx                                           xxxxxxx                          ",
   "                         xxxxxxxxxxxxx                                         xxxxxxxx                         ",
   "                                        xxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxx                        ",
   "         @                              xxxxxxxxxxxxxxxxxxxoxxxxxxxxxxxxxxxxxxxxxxxxxxxxx       o               ",
   "yyyyyyyyyyyyyyyyyyyyyyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxyyyyyyyyyyyyyyyyyyyyy"],
  ["                                                     ||                           ||                                 ",
   "                                                                                    |                                ",
   "                                                           o                     |                                   ",
   "                                                          xxx         w   w                                          ",
   "                                                     o                                                               ",
   "                                         o           xx         y                                                    ",
   "         w  o                                        xx                        y  |                                  ",
   "            y                            x             xx                     y                                      ",
   "       y                                 x               xx          y  y          |                                 ",
   " y                                       x                                                                           ",
   "                   o       w            @x                     xx                                                    ",
   "   y               y                    xxx                  xx                         o                            ",
   "          w                             x x            xxxxxx                       xxxxxxxxxx                       ",
   "     y        y         y      y        x x        y                                             x x                 ",
   "       y                              xxx xxx  y                                                 x x                 ",
   "                                       x   x                                                     xox                 ",
   "                                       x   x                                                      x                  ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "             w                                                                                                ",
   "                                                                                                              ",
   "                          o                                                                                   ",
   "                                                                                                              ",
   "                   xxx                                                                                        ",
   "       !  o                                                                                                   ",
   "       x     x                                                                                    xxxxx       ",
   "       x= o  x                                                                                                ",
   "       |     |                                                                     o      o                   ",
   "          o                                                                        x      x                   ",
   "                y                                                                                      x      ",
   "          o                                                                                                   ",
   "              y                                                                                               ",
   "                                                                                                              ",
   "        y   y                                                 y                                          x    ",
   "                                                             y                                                ",
   "                                                            y      x     x                                    ",
   "  xxxxxxx                                                  y       x     x                                    ",
   "                                                          y        x     x          w w w                   x ",
   "             xxx                     xxx                 y         x     x           w w                      ",
   "                                                        y          xxx xxxxx  xxx                             ",
   "  x|   |x                                              y           x     x   x  x                          x  ",
   "  x     xxxxx                                         y            x     x      x        x                    ",
   "  x y         o xx!!!!!xx o xx!!!!!xx o xx           y             x            x        x               x    ",
   "  x             xxxxxxxxx   xxxxxxxxx   x           y              x           ox        x   x                ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx          y               xo   xxxxx xxx                      x      ",
   "  xxxxxxx    w w         w w        w w w     xxxxx                xx                           x   o         ",
   "                                                  x                                                 x         ",
   "           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                !!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                                                           "],
   ["                                                                                                             ",
    "                                                                                                             ",
    "                                                                                                             ",
    "          x     x   xxxx    x      x      x    x    x  xxxxxxx  x    x   x  x  x                             ",
    "           x   x   x    x   x      x      x    x    x     x     xx   x   x  x  x                             ",
    "            x x   x      x  x      x      x    x    x     x     x x  x   x  x  x                             ",
    "             x    x      x  x      x      x    x    x     x     x  x x   x  x  x                             ",
    "             x     x    x    x    x        x  x x  x      x     x   xx                                       ",
    "             x      xxxx      xxxx          xx   xx    xxxxxxx  x    x   x  x  x                             ",
    "                                                                                                             ",
    "                                                                                                             ",
    "      @                                                                                      o                ",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
