precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

#define PI 3.1415926535
#define E  2.71828

void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0); 
    gl_PointSize = 1000.0;
}