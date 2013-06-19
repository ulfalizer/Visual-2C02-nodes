var nodenames_extra = {

// vpos decoding logic. '+' denotes buffering on pclk1 (half-cycle delay from
// vpos change to value change), '++' buffering on pclk1 followed by pclk0
// (full-cycle delay - one pixel), etc.

vpos_eq_247:845, // Old name was vpos_vsync_end
vpos_eq_244:846, // Old name was vpos_vsync_start

// Reg, possibly sync-related
pos_eq_279_244_to_278_247:5819,
'/pos_eq_279_244_to_278_247':5777,

// Range, possibly sync-related
// Lines   0-243: 279-303
// Line      244: 279-340
// Lines 245-246: Entire line
// Line      247: 0-303
// Line  248-261: 279-303
//
// Rough sketch (not to scale):
//
//          279  303
//           ------     0
//           ||||||
//           ------     243
//           ---------- 244
// -------------------- 245
// -------------------- 246
// ----------------     247
//           ------     248
//           ||||||
//           ------     261
'/in_range_1':5804,
'+/in_range_1':1079,

'+vpos_eq_241_2':5724,
'+vpos_eq_0':5725,
'+vpos_eq_240':5726,
'+vpos_eq_261_2':5727,
'+vpos_eq_261_3':5728,

'+/vpos_eq_261_3':1000,
'++/vpos_eq_261_3':5772,
// Clears the VBlank, sprite 0, and overflow flags, and interacts with the
// even/odd frame logic
'++vpos_eq_261_3':604,

// Reg
'+vpos_eq_240-261':5816,
'+/vpos_eq_240-261':5793,

'+/vpos_eq_240-261_2':5829,

'+/vpos_eq_241_2':1015,
'++/vpos_eq_241_2':5858,
'++vpos_eq_241_2':5857,
'+++vpos_eq_241_2':5785,

// Reg
'+pos_eq_270_261_to_270_241':5821,
'+/pos_eq_270_261_to_269_241':5820,

'++/pos_eq_270_261_to_269_241':5864,
'++hpos_eq_270_to_327':5863,

// Line    261: 328-340
// Lines 0-240: 0-269 and 328-340
// Line    241: 0-269
'++in_shift_range':5915,
'++/in_shift_range':949,

// VBlank flag

'/vbl_flag_out':1014,
'/read_2002_output_vblank_flag':5729,
'/vbl_flag_read_buffer':5827,
'vbl_flag_read_buffer_out':5871,
'/vbl_flag_read_buffer_out_and_read_2002':5778,
'vbl_flag_read_buffer_out_and_read_2002':5730,

'/enable_nmi':5731,

// Misc.

rendering_enabled:5900,
}

for (var extra_node in nodenames_extra) {
    // Prefer own versions
    for (var node in nodenames)
        if (nodenames[node] == nodenames_extra[extra_node])
            delete nodenames[node]

    nodenames[extra_node] = nodenames_extra[extra_node];
}
