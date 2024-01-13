precision mediump float;

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

/*float s(float x, float y, float n, float m) {
    return
        sin(n * x * PI) * sin(m * y * PI) 
        - 
        sin(m * x * PI) * sin(n * y * PI)
    ;
}

vec3 col(vec2 uv) {
    return vec3(
        tanh(s(uv.x,uv.y,2.0+sin(u_time*0.25*0.8),3.0+sin(u_time*0.25*1.1)))+.5,
        tanh(s(uv.x,uv.y,2.2+sin(u_time*0.25*0.8),3.1+sin(u_time*0.25*1.2)))+.5,
        tanh(s(uv.x,uv.y,2.1+sin(u_time*0.25*0.7),3.1+sin(u_time*0.25*1.3)))+.5
    );
}*/

/*float s(float x, float y, float n, float m) {
    return
        cos(n * x * PI) * sin(m * y * PI) 
        - 
        sin(m * x * PI) * cos(n * y * PI)
    ;
}

vec3 col(vec2 uv) {
    return vec3(
        tanh(s(uv.x,uv.y,(sin(u_time*0.1)-0.5)*10.0,(sin(u_time*0.5)-0.5)*10.0))+.5,
        0.0,
        0.0
    );
}*/

float s(float x, float y, float n, float m) {
    return
        cos(n * x * PI) * sin(m * y * PI) 
        - 
        sin(m * x * PI) * cos(n * y * PI)
    ;
}

vec3 col(vec2 uv) {
    return vec3(
        tanh(s(uv.x,uv.y,(sin(u_time*0.1)-0.51)*10.0,(sin(u_time*0.5)-0.01)*3.0))+.5,
        tanh(s(uv.x,uv.y,(sin(u_time*0.1)-0.52)*10.0,(sin(u_time*0.5)-0.02)*3.0))+.5,
        tanh(s(uv.x,uv.y,(sin(u_time*0.1)-0.53)*10.0,(sin(u_time*0.5)-0.03)*3.0))+.5
    );
}

void main() {
    vec2 uv = (gl_FragCoord.xy-u_resolution.xy/2.0)/min(u_resolution.x,u_resolution.y)*2.0;
    vec3 c = col(uv);
    gl_FragColor = vec4(mix(pow(c.r,-1.0),0.0,0.95), mix(pow(c.g,-1.0),0.0,0.95), mix(pow(c.b,-1.0),0.0,0.90), 1.0);
}