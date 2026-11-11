package app.marlboroadvance.mpvex.ui.utils

import androidx.compose.runtime.ProvidableCompositionLocal
import androidx.compose.runtime.compositionLocalOf
import androidx.navigation3.runtime.NavBackStack
import app.marlboroadvance.mpvex.presentation.Screen

val LocalBackStack: ProvidableCompositionLocal<NavBackStack<Screen>> =
  compositionLocalOf { error("返回栈未初始化！") }
