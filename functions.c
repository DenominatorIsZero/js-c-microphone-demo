#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
float exp_running_mean(float old, float new, float alpha)
{
  return alpha * old + (1 - alpha) * new;
}
