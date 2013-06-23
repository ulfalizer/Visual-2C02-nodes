var nodenames_extra = {

//
// vpos decoding logic.
//
// '+' denotes buffering on pclk1 (half-cycle delay from vpos change to value
// change), '++' buffering on pclk1 followed by pclk0 (full-cycle delay - one
// pixel), etc.
//

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

'/enable_nmi_2':5731,

//
// Nodes related to video generation
//

vpos_eq_247:845, // Old name was vpos_vsync_end
vpos_eq_244:846, // Old name was vpos_vsync_start

// Reg, possibly sync-related
pos_eq_279_244_to_278_247:5819,
'/pos_eq_279_244_to_278_247':5777,

// Lines   0-243: 279-304
// Line      244: 279-340
// Lines 245-246: Entire line
// Line      247: 0-304
// Line  248-261: 279-304
//
// Sketch (not to scale):
//
//          279  304
//           ------             0
//           ||||||
//           ------             243
//           ------------------ 244
// ---------------------------- 245
// ---------------------------- 246
// ----------------             247
//           ------             248
//           ||||||
//           ------             261
'/in_range_1':5804,
'+/in_range_1':1079,

//     257   280 304
//            -----             0
//            |||||
//            -----             243
//            ----------------- 244
// ------     ----------------- 245
// ------     ----------------- 246
// ------     -----             247
//            -----             248
//            |||||
//            -----             261
in_range_2:915,
'/in_range_2':5227,
'+/in_range_2':5157, // -> vid_sync_l

//                   309 323
//                    -----     0
//                    -----
//                    -----     243
//                              244
//                              245
//                              246
//                    -----     247
//                    -----     248
//                    -----
//                    -----     261
in_range_3:547,
'+in_range_3':511,

//
// Palette
//

'/read_2007_output_palette':1207,

//
// Sprite-related (?)
//

'+++hpos_eq_339_and_rendering':8704,
'+++/hpos_eq_339_and_rendering':8722,
'++++/hpos_eq_339_and_rendering':8705,
'++++hpos_eq_339_and_rendering':8715,
'+++++hpos_eq_339_and_rendering':8700,
'+++++/hpos_eq_339_and_rendering':1681, // I.e, delayed 2.5 pixels

// Sprite-zero-related

'/sprite_0_on_cur_scanline':1105,
'/sprite_0_on_next_scanline':5907,

'++/hpos_eq_256_to_319_and_rendering_2':5903,
'++/hpos_eq_256_to_319_and_rendering_2_and_pclk1':1107,

'++/hpos_eq_65_and_rendering_2':5890,
'++hpos_eq_65_and_rendering_and_pclk1':5876,

//
// Sprite data from OAM (prolly y coord) being subtracted from vpos
//

'+spr_d7':894,
'+spr_d6':868,
'+spr_d5':862,
'+spr_d4':859,
'+spr_d3':820,
'+spr_d2':816,
'+spr_d1':814,
'+spr_d0':4891,

'+/spr_d7':874,
'+/spr_d6':875,
'+/spr_d5':879,
'+/spr_d4':880,
'+/spr_d3':881,
'+/spr_d2':876,
'+/spr_d1':877,
'+/spr_d0':878,

'+spr_d7_gt_vpos7':902,
'+spr_d6_gt_vpos6':905,
'+spr_d5_gt_vpos5':906,
'+spr_d4_gt_vpos4':907,
'+spr_d3_gt_vpos3':908,
'+spr_d2_gt_vpos2':903,
'+spr_d1_gt_vpos1':909,
'+spr_d0_gt_vpos0':910,

'+spr_d7_ge_vpos7':5152,
'+spr_d6_ge_vpos6':938,
'+spr_d5_ge_vpos5':5153,
'+spr_d4_ge_vpos4':940,
'+spr_d3_ge_vpos3':5154,
'+spr_d2_ge_vpos2':941,
'+spr_d1_ge_vpos1':5155,
'+spr_d0_ge_vpos0':939,

'+spr_d7_lt_vpos7':5424,
'+spr_d6_lt_vpos6':5379,
'+spr_d5_lt_vpos5':5421,
'+spr_d4_lt_vpos4':5381,
'+spr_d3_lt_vpos3':5422,
'+spr_d2_lt_vpos2':5377,
'+spr_d1_lt_vpos1':5425,
'+spr_d0_lt_vpos0':5382,

'+spr_d0_eq_vpos0':982,
'+spr_d1_eq_vpos1':981,
'+spr_d2_eq_vpos2':980,
'+spr_d3_eq_vpos3':979,
'+spr_d4_eq_vpos4':978,
'+spr_d5_eq_vpos5':977,
'+spr_d6_eq_vpos6':976,
'+spr_d7_eq_vpos7':975,

// Subtractor outputs
'+vpos_minus_spr_d0':1039,
'+vpos_minus_spr_d1':1038,
'+vpos_minus_spr_d2':1037,
'+vpos_minus_spr_d3':1036,
'+vpos_minus_spr_d4':5803,
'+vpos_minus_spr_d5':5802,
'+vpos_minus_spr_d6':5801,
'+vpos_minus_spr_d7':5800,

// Logic above subtractor

'++in_visible_frame_and_hpos_ge_64_and_rendering':3825,
'/++in_visible_frame_and_hpos_ge_64_and_hpos0_and_rendering':3987,
'/+++in_visible_frame_and_hpos_ge_64_and_hpos0_and_rendering':3986,

rendering_3:509,

'++in_visible_frame_and_rendering_and_/hpos0':523, // Not powered
'++not_rendering_or_in_visible_frame_and_/hpos0':515,

'/spr_addr7':356,
'/spr_addr6':355,
'/spr_addr5':223,
'/spr_addr4':212,
'/spr_addr3':204,
'/spr_addr2':180,
'/spr_addr1':350,
'/spr_addr0':222,

spr_addr_7_carry_out:455,
'/spr_addr_7_carry_in':447,
spr_addr_7_carry_in:446,

spr_addr_6_carry_out:445, // Unused
'/spr_addr_6_carry_in':432,
spr_addr_6_carry_in:444,

spr_addr_5_carry_out:443, // Unused
'/spr_addr_5_carry_in':442,
spr_addr_5_carry_in:441,

spr_addr_4_carry_out:440, // Unused
'/spr_addr_4_carry_in':439,
spr_addr_4_carry_in:438,

spr_addr_3_carry_out:437, // Unused
'/spr_addr_3_carry_in':436,
spr_addr_3_carry_in:454,

spr_addr_2_carry_out:453, // Unused
'/spr_addr_2_carry_in':452,
spr_addr_2_carry_in:451,

spr_addr1_carry_out:435, // Unused
'/spr_addr0_carry_out':434,
spr_addr0_carry_out:450,
'/spr_addr0_carry_in':449,

spr_addr_next7:3078,
spr_addr_next6:3077,
spr_addr_next5:3076,
spr_addr_next4:3075,
spr_addr_next3:3074,
spr_addr_next2:3073,
spr_addr_next1:3072,
spr_addr_next0:3071,

spr_addr_load_next_value:288,

// spr_addr after passing through powered poly (labelled "protection" in Visual 2C02)
'/spr_addr7_':3423,
'/spr_addr6_':3422,
'/spr_addr5_':3421,
'/spr_addr4_':3420,
'/spr_addr3_':3419,
'/spr_addr2_':3418,
'/spr_addr1_':3417,
'/spr_addr0_':3416,
spr_addr7_:3505,
spr_addr6_:3504,
spr_addr5_:3503,
spr_addr4_:3502,
spr_addr3_:3501,
spr_addr2_:3500,
spr_addr1_:3499,
spr_addr0_:3498,

'/spr_addr2_out':39,
'/spr_addr1_out':51,
'/spr_addr0_out':57,

'spr_addr_0-1_eq_3':119,
'spr_addr_0-1_neq_3':120,
'/spr_load_next_value_or_write_2003_reg':179,

'/spr_ptr4':689,
'/spr_ptr3':688,
'/spr_ptr2':687,
'/spr_ptr1':681,
'/spr_ptr0':686,

'+spr_ptr4_carry_out':608,
spr_ptr4_carry_out:611,
'/spr_ptr3_carry_out':624,
spr_ptr3_carry_out:623,
'/spr_ptr2_carry_out':622,
spr_ptr2_carry_out:621,
'/spr_ptr1_carry_out':620,
spr_ptr1_carry_out:619,
'/spr_ptr0_carry_out':618,
spr_ptr0_carry_out:617,
'/spr_ptr0_carry_in':616, // Always 0

spr_ptr_next4:4710,
spr_ptr_next3:4709,
spr_ptr_next2:4708,
spr_ptr_next1:4707,
spr_ptr_next0:4706,

inc_spr_ptr:735,

// spr_ptr after passing through powered poly (labelled "protection" in Visual 2C02)
'/spr_ptr4_':4152,
'/spr_ptr3_':4151,
'/spr_ptr2_':4150,
'/spr_ptr1_':4149,
'/spr_ptr0_':4148,
spr_ptr4_:4322,
spr_ptr3_:4321,
spr_ptr2_:4320,
spr_ptr1_:4319,
spr_ptr0_:4318,

'+++/hpos_eq_63_255_or_339_and_rendering':4548,
clear_spr_ptr:743, // Also does other stuff

spr_addr_3_or_spr_ptr0_out:3740,
spr_addr_4_or_spr_ptr1_out:3741,
spr_addr_5_or_spr_ptr2_out:3742,
spr_addr_6_or_spr_ptr3_out:3735,
spr_addr_7_or_spr_ptr4_out:3701,
'/spr_addr_3_or_spr_ptr0_out':484,
'/spr_addr_4_or_spr_ptr1_out':491,
'/spr_addr_5_or_spr_ptr2_out':499,
'/spr_addr_6_or_spr_ptr3_out':510,
'/spr_addr_7_or_spr_ptr4_out':545,

// Logic below subtractor

'+spr_d7_2':5904,
'+/spr_d7_2':5909,
'+spr_d7_and_/vpos7':5839,

'++/hpos0_2':5872,
'++hpos0_2_and_pclk_1':1077,
'++hpos_mod_8_eq_1_and_rendering':5844,
'++/hpos_mod_8_eq_1_and_rendering':5832,
'+++/hpos_mod_8_eq_1_and_rendering':5879,
'+++/hpos_mod_8_eq_1_and_rendering_and_pclk0':1084,

'/spr_size_out':5828,

// Logic below $2000/$2001 regs

'+++/in_visible_frame_and_rendering':1261,
bkg_enable_out:1280,
'/bkg_enable_out':6816,
spr_enable_out:1267,
'/spr_enable_out':6817,
'+++in_clip_area_and_clipping_bg':6738,

// In visible frame, doing render ops, sprites enabled, and not clipping sprites
'+++do_sprite_render_ops':6850,
'++++do_sprite_render_ops':6740,
'++++/do_sprite_render_ops':1283, // Doubly buffered on pclk1?

// In visible frame, doing render ops, bg enabled, and not clipping bg
'+++do_bg_render_ops':1281,

'++/hpos2_2':7073,
'++/hpos1_2':6996,
'++/hpos0_2':6997,
'++/hpos_eq_256_to_319_and_rendering_2':6998,

'++hpos_eq_256_to_319_and_hpos_mod_8_eq_3_and_rendering':1310,
'++hpos_eq_256_to_319_and_hpos_mod_8_eq_2_and_rendering':1320,
'++hpos_eq_256_to_319_and_hpos_mod_8_eq_7_and_rendering':1328,
'++hpos_eq_256_to_319_and_hpos_mod_8_eq_5_and_rendering':1338,
'+++hpos_eq_256_to_319_and_hpos_mod_8_eq_3_and_rendering':1305,
'+++hpos_eq_256_to_319_and_hpos_mod_8_eq_2_and_rendering':1321,
'+++hpos_eq_256_to_319_and_hpos_mod_8_eq_7_and_rendering':1330,
'+++hpos_eq_256_to_319_and_hpos_mod_8_eq_5_and_rendering':1336,

'+vramaddr_v4_out':1541,
'+vramaddr_v3_out':1570,
'+vramaddr_v2_out':1559,
'+vramaddr_v1_out':1556,
'+vramaddr_v0_out':1551,
'+/vramaddr_v4_out':1542,
'+/vramaddr_v3_out':1569,
'+/vramaddr_v2_out':1563,
'+/vramaddr_v1_out':1557,
'+/vramaddr_v0_out':1550,

//
// BG shifter logic
//

'/fine_x0':2723,
'/fine_x1':2725,
'/fine_x2':2727,

'++/hpos_eq_0-255_or_320-335_and_hpos_mod_8_eq_4_or_5_and_rendering':2593,
'++/hpos_eq_0-255_or_320-335_and_rendering_4':10201,
'++hpos_eq_0-255_or_320-335_and_rendering_and_pclk1':2722,
'++/hpos_eq_0-255_or_320-335_and_hpos_mod_8_eq_6_or_7_and_rendering':2632,
'+/hpos_eq_0-255_or_320-335_and_hpos_mod_8_eq_2_or_3_and_rendering':10278,
'++/hpos_eq_0-255_or_320-335_and_hpos_mod_8_eq_2_or_3_and_rendering':10110,

'++hpos_eq_0-255_or_320-335_and_hpos_mod_8_eq_7_and_rendering':10111,

'++hpos_eq_0-255_or_320-335_and_hpos_mod_8_eq_3_and_rendering_and_pclk1':2533,
'++hpos_eq_0-255_or_320-335_and_hpos_mod_8_eq_5_and_rendering_and_pclk1':2543,
'++hpos_eq_0-255_or_320-335_and_hpos_mod_8_eq_7_and_rendering_and_pclk1':2597,
'++hpos_eq_0-255_or_320-335_and_hpos_mod_8_neq_7_and_rendering_and_pclk1':2607, // Note: 'neq', not 'eq'

'++/hpos0_3':2611,

'++++do_bg_render_ops':10165,
'++++/do_bg_render_ops':2606,

// There are other conditions on this one too, but they don't seem to matter
// (the pull-downs are always low during pclk0)
pclk0_3:2633,

'/tile_lbuf7':10052,
'/tile_lbuf6':10051,
'/tile_lbuf5':10050,
'/tile_lbuf4':10049,
'/tile_lbuf3':10048,
'/tile_lbuf2':10047,
'/tile_lbuf1':10046,
'/tile_lbuf0':10045,

// Shifter outputs, with bit selected by fine_x
tile_l_bit_out:2732,
tile_h_bit_out:2730,
attrib_l_bit_out:2729,
attrib_h_bit_out:2731,
'/tile_l_bit_out':10204,
'/attrib_l_bit_out':10203,
'/attrib_h_bit_out':10202,

'+tile_h_bit_out':10145,
'+/tile_l_bit_out':10144,
'+/attrib_l_bit_out':10143,
'+/attrib_h_bit_out':10142,

'+/tile_h_bit_out':10090,
'+tile_l_bit_out':10089,
'+attrib_l_bit_out':10088,
'+attrib_h_bit_out':10087,

'++/tile_h_bit_out':10256,
'++tile_l_bit_out':10255,
'++attrib_l_bit_out':10254,
'++attrib_h_bit_out':10253,

//
// vramaddr_v logic
//

// Incrementation logic for vramaddr_v. Each group below can be incremented
// separately.

vramaddr_v14_carry_out:2095, // Unused
'/vramaddr_v13_carry_out':2096,
vramaddr_v13_carry_out:2097,
'/vramaddr_v12_carry_out':2098,
vramaddr_v12_carry_out:2099,
'/vramaddr_v12_carry_in':2100,
vramaddr_v12_carry_in:2101,

vramaddr_v11_carry_out_and_not_rendering:2091,
'/vramaddr_v11_carry_in':2103,
vramaddr_v11_carry_in:2104,

vramaddr_v10_carry_out_and_not_rendering:2089,
'/vramaddr_v10_carry_in':2105,
vramaddr_v10_carry_in:2093,

vramaddr_v9_carry_out:2107, // Unused
'/vramaddr_v8_carry_out':2108,
vramaddr_v8_carry_out:2109,
'/vramaddr_v7_carry_out':2110,
vramaddr_v7_carry_out:2111,
'/vramaddr_v6_carry_out':2112,
vramaddr_v6_carry_out:2113,
'/vramaddr_v5_carry_out':2114,
vramaddr_v5_carry_out:2115,
'/vramaddr_v5_carry_in':2116,

vramaddr_v4_carry_out:2118, // Unused
'/vramaddr_v3_carry_out':2119,
vramaddr_v3_carry_out:2120,
'/vramaddr_v2_carry_out':2125,
vramaddr_v2_carry_out:2121,
'/vramaddr_v1_carry_out':2122,
vramaddr_v1_carry_out:2126,
'/vramaddr_v0_carry_out':2123,
vramaddr_v0_carry_out:2127,
'/vramaddr_v0_carry_in':2128,
vramaddr_v0_carry_in:2129,

// Holds the new value the vramaddr_v bits will have after being incremented
// (if the carry in for the group is set)

vramaddr_v14_next:9738,
vramaddr_v13_next:9739,
vramaddr_v12_next:9740,
vramaddr_v11_next:9741,
vramaddr_v10_next:9742,
vramaddr_v9_next:9743,
vramaddr_v8_next:9744,
vramaddr_v7_next:9745,
vramaddr_v6_next:9746,
vramaddr_v5_next:9747,
vramaddr_v4_next:9748,
vramaddr_v3_next:9749,
vramaddr_v2_next:9750,
vramaddr_v1_next:9751,
vramaddr_v0_next:9752,

// vramaddr_v output signals (renamed from vramaddr_+vN)

'vramaddr_v14_out':2271,
'vramaddr_v13_out':2272,
'vramaddr_v12_out':2273,
'vramaddr_v11_out':2274,
'vramaddr_v10_out':2275,
'vramaddr_v9_out':2066,
'vramaddr_v8_out':2072,
'vramaddr_v7_out':2076,
'vramaddr_v6_out':2267,
'vramaddr_v5_out':2268,
'vramaddr_v4_out':1538,
'vramaddr_v3_out':1574,
'vramaddr_v2_out':1573,
'vramaddr_v1_out':1565,
'vramaddr_v0_out':1558,

//
// Bottom blob of logic (between pins)
//

rendering_4:10603,
'++hpos0':10593,
'/read_2007_output_vrambuf':10578,
read_2007_output_vrambuf_2:2327,
'+rendering_and_/hpos0_and_pclk0':10576,
'+not_rendering':10553,
'+/not_rendering':10554,
'_ab_13-8_eq_0_and_rendering':10551,
'_ab_13-8_eq_0_and_rendering_2':1266,

//
// Misc.
//

'/rendering_disabled':5900,
pclk0_2:6084,
pclk1_2:1064,
pclk1_3:2610,
'++hpos0_2':589,
'/read_2002_outupt_spr0_hit':1253,
}

for (var extra_node in nodenames_extra) {
    // Prefer own versions
    for (var node in nodenames)
        if (nodenames[node] == nodenames_extra[extra_node])
            delete nodenames[node]

    nodenames[extra_node] = nodenames_extra[extra_node]
}
