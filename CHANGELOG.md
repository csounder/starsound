# Changelog

All notable changes to Dr.C - StarSound will be documented in this file.

## [1.1.0] - 2026-03-24

### 📱 Mobile & Desktop Optimized Versions

#### **New Versions**

- **Desktop Version** (`app-desktop.html`) - Optimized for laptop/desktop with full keyboard control
- **Mobile Version** (`app-mobile.html`) - Touch-optimized with gesture controls
- **Auto-Detect Version** (`app.html`) - Responsive version that adapts to device

#### **Mobile Features**

- Toggle buttons (⚙️ 🎛️) always visible on mobile screens
- Collapsible control panels (hidden by default for full screen stars)
- Touch gestures:
  - Swipe from left/right edges to open panels
  - 3-finger tap to hide all controls
  - Tap outside to close panels
- Mobile help overlay on first visit
- Touch-friendly button sizes and fonts

#### **Desktop Features**

- Both control panels visible by default
- All keyboard shortcuts work (M, S, R, Space, 1-3, X, ESC)
- Optimized for mouse and keyboard navigation
- No touch gesture controls needed

#### **Landing Page**

- Version selector with 3 options
- Auto-detection recommends best version for device
- Visual indicators for recommended version
- Direct links to all versions

#### **Documentation**

- Updated README.md with version comparison
- Updated QUICKSTART.md with mobile vs desktop instructions
- New VERSIONS.md - Complete guide to all 3 versions
- Mobile touch gesture reference
- Desktop keyboard shortcut reference

#### **Technical**

- Responsive CSS media queries for mobile/tablet/desktop
- Touch event handlers for gestures
- Device detection (user agent + screen width)
- Local storage for mobile help overlay (show once)

---

## [1.0.0] - 2026-03-24

### 🎉 Initial Release

#### **Audio Engine**

- Csound 7 integration via @csound/browser (WebAssembly)
- 35 synthesis instruments across 3 categories
- Real-time parameter control via Csound channels
- Global reverb effect (Freeverb algorithm)
- Polyphony: 20-64 voices depending on instrument

#### **Instruments**

- **11 Standard**: Plucked String, Plucked Harp, Brass Stab, Deep Pulse, Warm Pad, Shimmer Pad, Ethereal Pad, Soft Bell, Glass Marimba, Additive Bell, Glass Bell
- **8 Advanced**: Ring Mod, Waveshape, Subtractive, Additive Organ, FOF, Granular, Physical Model, Voice Synth
- **12 Exotic/Organic**: Chirp, Warble, Water Drop, Wood Block, Glass Marimba, Pop Bubble, Puff, Crackle, Scrape, Breath, Growl, Drag

#### **Presets**

- 23 mono presets with diverse sonic characters
- 9 multitimbral presets with 4-voice layering
- Preset export/import (JSON format)
- One-click preset loading

#### **Multitimbral System**

- 4-voice layering by screen Y position
- Independent instrument selection per voice
- Individual voice controls: Attack, Release, Filter, FX Send, Volume
- Solo/Mute per voice
- Adjustable split points (3 sliders)
- 9 pre-configured multitimbral presets

#### **Sonification Modes**

- **Position/Brightness**: Map star location and magnitude to pitch/amplitude
- **Color/Temperature**: Sonify star color and temperature
- **Constellation Patterns**: Rhythmic percussion based on constellation membership

#### **Interaction Modes**

- **Mouse/Touch**: Hover over stars to trigger sounds
- **Auto Scan**: Automated horizontal/vertical sweeps
- **Region Select**: Draw rectangle and scan only stars within

#### **Controls**

- Pitch range (50Hz - 6000Hz)
- Scan speed (1-40 seconds)
- Scan radius (30-250 pixels)
- Reverb mix (0-100%)
- Stereo width (0-200%)
- Sky band width (5-90°)
- Scan direction (horizontal/vertical)
- Loop/one-shot toggle

#### **Keyboard Shortcuts**

- `M` - Mouse/Touch mode
- `S` - Auto Scan mode
- `R` - Region Select mode
- `Space` - Toggle scan on/off
- `1` - Position/Brightness sonification
- `2` - Color/Temperature sonification
- `3` - Constellation Patterns sonification
- `X` - Randomize all settings
- `ESC` - Hide/show control panels
- `WASD` / Arrow keys - Navigate viewport

#### **Randomization**

- One-click randomization of all parameters
- Randomizes: instruments, voice mapping, envelopes, filters, effects, mappings, pitch ranges, scan settings
- Keyboard shortcut: `X`
- Rainbow gradient button with hover effect

#### **Astronomical Features**

- Real-time sky view with geolocation
- Local Sidereal Time (LST) calculation
- Alt/Az conversion from RA/Dec
- 12 zodiac constellations with accurate J2000 coordinates
- Constellation line patterns
- Switchable star catalogs (500/1000/2000 stars)
- Incremental star control (±50 stars)
- Constellation band sweeping (30° declination bands)

#### **Visual Features**

- HTML5 Canvas star rendering
- Real-time cursor tracking
- Scan line visualization
- Region selection rectangle
- Constellation line drawing
- Viewport pan and zoom
- Compass directions (N, S, E, W)

#### **Documentation**

- Comprehensive README.md
- Quick Start Guide (QUICKSTART.md)
- Deployment Guide (DEPLOYMENT.md)
- Landing page (index.html)
- Keyboard shortcuts reference
- Preset descriptions

#### **Architecture**

- Single-file application (685KB)
- No dependencies (all-in-one HTML)
- Offline-capable
- Cross-browser compatible (Chrome, Firefox, Safari, Edge)

---

## Future Roadmap

### Planned Features

- [ ] MIDI input support
- [ ] Audio export/recording
- [ ] More constellations (88 total)
- [ ] Custom star catalog upload
- [ ] Collaborative mode (multi-user)
- [ ] Mobile touch gestures
- [ ] VR/AR support
- [ ] Machine learning preset generation
- [ ] Real-time telescope integration

### Potential Enhancements

- [ ] Visual spectrum analyzer
- [ ] Star magnitude visualization
- [ ] Constellation mythology overlay
- [ ] Educational mode with labels
- [ ] Performance mode (larger polyphony)
- [ ] Custom scale creator
- [ ] Microtonal tuning systems
- [ ] OSC support for external control

---

**Version Format**: MAJOR.MINOR.PATCH

- **MAJOR**: Incompatible API changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)
