precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

#define PI 3.1415926535
#define E  2.71828

float sinh(float n) {
    return (pow(E,n)-pow(E,-n))/2.0;
}

float cosh(float n) {
    return (pow(E,n)+pow(E,-n))/2.0;
}

float tanh(float n) {
    return sinh(n)/cosh(n);
}

float s(float x, float y, float n, float m) {
    return
        tan(n * x * PI) * tan(m * y * PI) 
        + 
        tan(m * x * PI) * tan(n * y * PI)
    ;
}

vec3 col(vec2 uv) {
    return vec3(
        tanh(s(uv.x,uv.y,sin(u_time*0.2)+3.5,sin(u_time*0.7)+7.2))+.5,
        tanh(s(uv.x,uv.y,sin(u_time*0.2)+3.5,sin(u_time*0.7)+7.2))+.5,
        tanh(s(uv.x,uv.y,sin(u_time*0.2)+3.5,sin(u_time*0.7)+7.2))+.5
    );
}

void main() {
    vec2 uv = (gl_FragCoord.xy-u_resolution.xy/2.0)/min(u_resolution.x,u_resolution.y)*2.0;
    vec3 c = col(uv);
    gl_FragColor = vec4(vec3(min(1.0,pow(c.r,-1.0)), min(1.0,pow(c.g,-1.0)), min(1.0,pow(c.b,-1.0))) * .03, .1);
}