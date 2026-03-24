# 🌟 Dr.C - StarSound

**Real-Time Interactive Star Sonification**

Transform the night sky into sound. Dr.C - StarSound is an astronomical sonification application that converts star positions, brightness, and colors into real-time audio using Csound synthesis.

![Dr.C - StarSound](images/screenshot.png)

## ✨ Features

### 🎵 **35 Synthesis Instruments**

- **11 Standard Instruments**: Plucked strings, pads, brass, bells, harps, pulses
- **8 Advanced Synthesis**: Ring modulation, waveshaping, FM, granular, FOF, physical modeling
- **12 Exotic/Organic**: Chirps, warbles, water drops, breath, growl, crackle

### 🎛️ **Multitimbral Sound Design**

- **9 Preset Sound Sets**: Cosmic Choir, Analog Dreams, Bell Garden, Alien Forest, and more
- **4-Voice Layering**: Split screen by height with independent instruments per voice
- **Individual Voice Controls**: Attack, release, filter, FX send, volume, solo/mute

### 🌌 **3 Sonification Modes**

1. **Position/Brightness** - Map star location and magnitude to pitch and amplitude
2. **Color/Temperature** - Sonify star color and temperature (hot blue vs cool red)
3. **Constellation Patterns** - Trigger rhythmic percussion based on constellation membership

### 🖱️ **3 Interaction Modes**

1. **Mouse/Touch** - Hover over stars to hear them
2. **Auto Scan** - Automated horizontal/vertical sweeps across the sky
3. **Region Select** - Draw a rectangle and scan only stars within that region

### 🎹 **23 Mono Presets**

- Pre-configured soundscapes from "Deep Space Explorer" to "Alien Forest"
- Instant sonic transformations with one click
- Export/import your own custom presets

### ⌨️ **Full Keyboard Control**

- `M` - Mouse mode
- `S` - Scan mode
- `R` - Region mode
- `Space` - Toggle scan
- `1/2/3` - Sonification modes
- `X` - Randomize all settings
- `ESC` - Hide/show controls
- `WASD/Arrows` - Navigate viewport

### 🎲 **Randomization**

- One-click randomization of all settings
- Discover unexpected sonic combinations
- Randomizes instruments, envelopes, effects, mappings, and more

### 🌠 **Real-Time Sky View**

- View the actual night sky from your location
- 12 zodiac constellations with accurate star data
- Real-time altitude/azimuth calculations
- Constellation line patterns

## 🚀 Quick Start

### **Choose Your Version**

Dr.C - StarSound comes in **3 versions** to optimize your experience:

#### **💻 Desktop Version** (`app-desktop.html`)

- **Best for**: Laptop/desktop computers
- **Features**: Full control panels visible, keyboard shortcuts, dual-panel layout
- **Controls**: ESC to hide/show panels, all keyboard shortcuts work
- **Recommended if**: Using mouse/keyboard on large screen

#### **📱 Mobile Version** (`app-mobile.html`)

- **Best for**: Phones and tablets
- **Features**: Touch-optimized, gesture controls, collapsible panels
- **Controls**:
  - Tap ⚙️ button (top-left) for audio/sonification controls
  - Tap 🎛️ button (top-right) for sound/instrument controls
  - Swipe from edges to open panels
  - 3-finger tap to hide all controls
  - Tap middle of screen to close panels
- **Recommended if**: Using touchscreen on phone/tablet

#### **🌐 Auto-Detect Version** (`app.html`)

- **Best for**: Any device (responsive)
- **Features**: Automatically adapts to screen size
- **Controls**: Combines both desktop and mobile controls
- **Recommended if**: Unsure which device you'll use

### **How to Launch**

#### **Option 1: Online (Easiest)**

Visit: **[https://starsound.netlify.app](https://starsound.netlify.app)**

- Click your preferred version button
- Auto-detect recommends best version for your device

#### **Option 2: Download & Open**

1. Download the appropriate version:
   - Desktop: `app-desktop.html`
   - Mobile: `app-mobile.html`
   - Auto: `app.html`
2. Double-click to open in browser
3. Click **"▶ Start Audio Engine"**
4. Start exploring!

#### **Option 3: Local Server**

```bash
# Python 3
python -m http.server 8000

# Open: http://localhost:8000
# Then choose your version from landing page
```

## 🎮 How to Use

### **Getting Started**

1. **Start Audio** - Click "▶ Start Audio Engine" (required for sound)
2. **Choose Interaction Mode** - Try Mouse/Touch mode first
3. **Hover Over Stars** - Move your cursor over stars to hear them
4. **Try Presets** - Select from 23 mono presets or 9 multitimbral presets
5. **Experiment** - Adjust controls, try different modes, press `X` to randomize!

### **Interaction Modes**

#### **🖱️ Mouse/Touch Mode [M]**

- Hover cursor over stars to trigger sounds
- Stars within scan radius are triggered
- Real-time response to cursor movement

#### **📡 Auto Scan Mode [S]**

- Automated sweeping across the sky
- Adjustable scan speed (1-40 seconds)
- Toggle horizontal/vertical scanning
- Loop or one-shot modes

#### **🔲 Region Select Mode [R]**

- Click and drag to draw a rectangle
- Scans only stars within the selected region
- Perfect for focusing on specific constellations

### **Sonification Modes**

#### **1️⃣ Position/Brightness**

- **X position** → **Pitch** (left = low, right = high)
- **Brightness (magnitude)** → **Amplitude** (bright = loud, dim = quiet)
- **Y position** → **Pan** or **Filter** (configurable)

#### **2️⃣ Color/Temperature**

- **Star temperature** → **Pitch** (hot blue stars = high, cool red = low)
- **Spectral class** → **Timbre** (different colors = different sounds)
- Automatic temperature-based synthesis

#### **3️⃣ Constellation Patterns**

- Stars trigger **percussion** based on constellation membership
- Each constellation has unique rhythmic characteristics
- Explore zodiac patterns sonically

### **Multitimbral Mode**

1. Select **"Multitimbral (4 Voices by Height)"** from Voice Mapping dropdown
2. Choose a multitimbral preset (e.g., "Cosmic Choir")
3. Stars at different screen heights trigger different instruments:
   - **Top 25%** - Voice 1 (high sounds)
   - **25-50%** - Voice 2 (mid-high)
   - **50-75%** - Voice 3 (mid-low)
   - **Bottom 25%** - Voice 4 (bass/foundation)
4. Adjust split points and individual voice controls

## 🎛️ Controls Reference

### **Audio Parameters**

- **Pitch Range** - Frequency range (50Hz - 6000Hz)
- **Scan Speed** - Auto scan duration
- **Scan Radius** - Trigger distance around cursor
- **Reverb Mix** - Global reverb amount (0-100%)
- **Stereo Width** - Stereo spread (0-200%)

### **Mono Instrument Controls**

- **Level** - Overall volume
- **Attack** - Note onset time (1-200ms)
- **Release** - Note decay time (50-2000ms)
- **Filter** - Lowpass filter cutoff (200Hz-12kHz)
- **FX Send** - Reverb send amount (0-100%)

### **Multitimbral Voice Controls**

- **Instrument** - Select per-voice instrument
- **Attack/Release** - Per-voice envelopes
- **Filter** - Per-voice filter cutoff
- **FX Send** - Per-voice reverb send
- **Volume** - Per-voice level
- **Solo/Mute** - Isolate or silence voices

### **Mapping Controls**

- **Pan Mapping** - Map pan to: X position, RA, magnitude, or temperature
- **Filter Mapping** - Map filter to: none, magnitude, or temperature
- **Duration Mapping** - Map note length to: brightness, temperature, or distance

## 🌌 Astronomical Data

### **Star Catalogs**

- **Zodiac Catalog** - 12 constellations with accurate J2000 coordinates
- **Full Sky Catalogs** - Switchable 500/1000/2000 star catalogs
- **Incremental Control** - Add/remove stars in 50-star increments

### **Real-Time Sky View**

- Uses browser geolocation
- Calculates Local Sidereal Time (LST)
- Converts RA/Dec to Alt/Az for your location
- Constellation band sweeping (30° declination bands)

### **Constellation Lines**

- Accurate line patterns for all 12 zodiac constellations
- Toggle visibility on/off
- Visual and sonic exploration

## 🎵 Instruments Guide

### **Standard Synthesis**

- **Plucked String** - Karplus-Strong algorithm, bright attack
- **Plucked Harp** - Softer pluck with warm decay
- **Brass Stab** - Punchy brass with fast attack
- **Deep Pulse** - Sub-bass pulse with slow attack
- **Warm Pad** - Smooth, evolving pad sound
- **Shimmer Pad** - Bright pad with high-frequency shimmer
- **Ethereal Pad** - Airy, floating texture
- **Soft Bell** - Gentle bell with inharmonic partials
- **Glass Marimba** - Crystal-like mallet percussion
- **Additive Bell** - Rich bell with 8 harmonics
- **Glass Bell** - Bright, shimmering bell

### **Advanced Synthesis**

- **Ring Mod** - Ring modulation with sidebands
- **Waveshape** - Waveshaping distortion
- **Subtractive** - Sawtooth + filter sweep
- **Additive Organ** - 8-partial organ synthesis
- **FOF** - Formant synthesis (vocal-like)
- **Granular** - Granular synthesis clouds
- **Physical Model** - Waveguide physical modeling
- **Voice Synth** - Vocal synthesis with formants

### **Exotic/Organic**

- **Chirp** - Bird-like chirping sounds
- **Warble** - Oscillating, warbling tones
- **Water Drop** - Liquid droplet sounds
- **Wood Block** - Wooden percussion
- **Glass Marimba** - Glass mallet percussion
- **Pop Bubble** - Bubble popping textures
- **Puff** - Airy puff sounds
- **Crackle** - Fire-like crackling
- **Scrape** - Scraping, friction textures
- **Breath** - Breathy, wind-like sounds
- **Growl** - Deep, rumbling growls
- **Drag** - Dragging, sliding textures

## 📋 Preset Guide

### **Mono Presets (23 total)**

- **Deep Space Explorer** - Wide reverb, slow scan, ethereal pads
- **Quick Scan** - Fast, percussive scanning
- **Melodic Journey** - Musical pitch ranges, bells
- **Ambient Drift** - Slow, evolving textures
- **Cosmic Cathedral** - Heavy reverb, vocal-like sounds
- **Crystalline Bells** - Bright, shimmering bells
- **Percussive Rain** - Fast, rhythmic patterns
- **Stellar Orchestra** - Rich, layered textures
- **Vertical Sky Dive** - Vertical scanning, high pitches
- **Sub-Bass Earthquake** - Ultra-low frequencies
- **Glass Marimba Orchestra** - Tuned percussion
- **Organic Insectoid** - Chirps and warbles
- **Breath of Stars** - Airy, breathy textures
- **Deep Ocean Pulse** - Slow, deep pulses
- **Crystalline Waterfall** - Cascading water drops
- **Alien Rainforest** - Exotic, organic sounds
- **Warbling Cosmos** - Oscillating, unstable tones
- **Crackling Nebula** - Fire-like textures
- **Wooden Percussion** - Wood block rhythms
- **Growling Void** - Deep, rumbling bass
- **Dragging Cosmos** - Friction-based textures
- **Popping Stars** - Bubble-like pops
- **Scraping Firmament** - Scraping, sliding sounds

### **Multitimbral Presets (9 total)**

- **🌌 Cosmic Choir** - Voice synth + FOF + pads (vocal ensemble)
- **🎛️ Analog Dreams** - Pluck + brass + pulse + pad (classic synthesis)
- **🌿 Organic Textures** - Chirp + water + wood + breath (natural sounds)
- **🎤 Vocal Ensemble** - 4 vocal synthesis voices
- **🔔 Bell Garden** - Glass bells + additive bells (tuned percussion)
- **🎻 Orchestral Layers** - Strings + brass + pads + bass (orchestral)
- **💎 Crystal Rain** - Water + glass + bells + shimmer (cascading)
- **🥁 Rhythmic Pulse** - Plucks + brass + harp + pulse (rhythmic)
- **👽 Alien Forest** - Chirp + warble + breath + growl (exotic)

## 🎨 Tips & Tricks

### **Discovering New Sounds**

1. **Press `X`** - Instant randomization creates unexpected combinations
2. **Mix Modes** - Switch between sonification modes while scanning
3. **Adjust Split Points** - In multitimbral mode, try uneven voice distributions
4. **Layer Effects** - High reverb + wide stereo = huge spacescapes
5. **Extreme Pitch Ranges** - Try 30Hz-6000Hz for full frequency spectrum

### **Performance Tips**

1. **Voice Limit** - Default 20 simultaneous voices (adjustable)
2. **Reduce Scan Radius** - Smaller radius = fewer simultaneous notes
3. **Lower Reverb** - Heavy reverb uses more CPU
4. **Use Mono Mode** - Simpler than multitimbral for lower CPU usage

### **Musical Exploration**

1. **Scale Quantization** - Lock pitches to musical scales (Major, Minor, Pentatonic, etc.)
2. **Key Selection** - Set root note (C, D, E, etc.)
3. **Constellation Scanning** - Focus on one constellation for coherent patterns
4. **Region Mode** - Draw small rectangles for dense, clustered sounds

### **Export & Share**

1. **Export Presets** - Save your settings as JSON files
2. **Import Presets** - Load shared presets from others
3. **Screenshot** - Capture beautiful visual + sonic moments
4. **Record Audio** - Use system audio recording to capture performances

## 🔧 Technical Details

### **Browser Requirements**

- **Modern browser** with Web Audio API support
- **Chrome/Edge** - Recommended (best performance)
- **Firefox** - Supported
- **Safari** - Supported (may need permissions for geolocation)

### **Audio Engine**

- **Csound 7** via `@csound/browser` (WebAssembly)
- **Sample Rate**: 44.1kHz
- **Buffer Size**: 256 samples (low latency)
- **Polyphony**: 20-64 voices (instrument dependent)
- **Global Effects**: Reverb (Freeverb algorithm)

### **Performance**

- **File Size**: 685KB (single HTML file, no dependencies)
- **Offline Capable**: Works without internet connection
- **No Installation**: Pure web app, no plugins needed

## 🛠️ Development

### **Built With**

- **Csound 7** - Audio synthesis engine
- **@csound/browser** - Csound WebAssembly build
- **Vanilla JavaScript** - No frameworks, pure JS
- **HTML5 Canvas** - Star visualization
- **Web Audio API** - Audio output

### **Architecture**

- **Single-file app** - Everything in `index.html`
- **Embedded Csound orchestra** - Instruments defined inline
- **Real-time parameter control** - Live Csound channel updates
- **Event-based triggering** - Dynamic i-statement generation

## 📄 License

This project is open source and available under the MIT License.

## 👏 Credits

**Created by**: Dr. Richard Boulanger  
**Powered by**: Csound (Barry Vercoe, John ffitch, and the Csound community)  
**Astronomical Data**: Yale Bright Star Catalog, Hipparcos  
**Synthesis Algorithms**: Classic computer music techniques from the MIT/Csound legacy

## 🌐 Links

- **GitHub Repository**: https://github.com/csounder/starsound
- **Live Demo**: https://starsound.netlify.app _(coming soon)_
- **Csound**: https://csound.com
- **Report Issues**: https://github.com/csounder/starsound/issues

---

**Explore the cosmos through sound. Every star has a voice. 🌟🎵**
