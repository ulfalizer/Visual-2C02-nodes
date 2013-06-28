var nodenames_extra = {

// For most position-related nodes, '+' denotes buffering on pclk1 (half-cycle
// delay from vpos change to value change), '++' buffering on pclk1 followed by
// pclk0 (full-cycle delay - one pixel), etc.
//
// Things are less consistent for non-position-related nodes, where '+' means
// buffered on either pclk0 or pclk1, '++' buffered twice, etc.

//
// vpos decoding logic.
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
'++in_draw_range':5915,
'++/in_draw_range':949,

// VBlank flag

'/vbl_flag_out':1014,
'/read_2002_output_vblank_flag':5729,
'/vbl_flag_read_buffer':5827,
'vbl_flag_read_buffer_out':5871,
'/vbl_flag_read_buffer_out_and_read_2002':5778,
'vbl_flag_read_buffer_out_and_read_2002':5730,

'/enable_nmi_2':5731,

//
// Logic below position decoding logic
//

'/ab_in_palette_range_and_not_rendering':6048,
'(++in_draw_range_or_read_2007_output_palette)_and_/pal_mono':1350,

'+write_2007_ended_3':6741,
'/(ab_in_palette_range_and_not_rendering_and_+write_2007_ended)':6728,
'/(ab_in_palette_range_and_not_rendering_and_+write_2007_ended)_2':1276,


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

// Always high after writing 2004 (as that increments spr_addr). Also high
// during sprite evaluation at points where spr_addr is bumped.
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

'+delayed_write_2004_value':2956,
'+/delayed_write_2004_value':2960,
'+delayed_write_2004_value_and_pclk0':397,
'/(+delayed_write_2004_value_and_pclk0)':364,

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

'+++hpos_lt_64_and_rendering':4551,
'/spr_eval_skip_sprite_2':4303,
'+/spr_eval_skip_sprite':4550,
'spr_eval_skip_sprite_and_/+++hpos_lt_64_and_rendering':4630,
'/(spr_eval_skip_sprite_and_/+++hpos_lt_64_and_rendering)_and_/+hpos0':4627,
// Possibly incorrect - simplify...
'/(++hpos_eq_256_to_319_and_rendering_and_+/hpos2)_and_((spr_eval_skip_sprite_and_/+++hpos_lt_64_and_rendering)_or_/+hpos0)':730,

'/((++/hpos_eq_63_255_or_339_and_rendering)_or_/spr_ptr_overflow)':4705,
'+/((++/hpos_eq_63_255_or_339_and_rendering)_or_/spr_ptr_overflow)':4624,

'/read_2002_output_spr_overflow':3753,
'/spr_overflow_out':3743,
spr_overflow_output_high:522,

// Reg
spr_ptr_overflow:300,
'/spr_ptr_overflow':4314,

'+/spr_ptr_overflow':4067,

// Reg
spr_overflow_on_cur_line:272,
'/spr_overflow_on_cur_line':460,

copy_sprite_to_sec_oam:1047,
'copy_sprite_to_sec_oam_buf_++hpos0':5880,
'/copy_sprite_to_sec_oam_buf_++hpos0':5923,
'+/copy_sprite_to_sec_oam_buf_++hpos0':5897,
'+copy_sprite_to_sec_oam_buf_++hpos0':5866,
'copy_sprite_to_sec_oam_buf_2x_++hpos0':5891,
'/copy_sprite_to_sec_oam_buf_2x_++hpos0':5921,
'+/copy_sprite_to_sec_oam_buf_2x_++hpos0':5896,
'+copy_sprite_to_sec_oam_buf_2x_++hpos0':5867,
'copy_sprite_to_sec_oam_buf_3x_++hpos0':5892,
'/copy_sprite_to_sec_oam_buf_3x_++hpos0':5919,
'+/copy_sprite_to_sec_oam_buf_3x_++hpos0':5895,
'+copy_sprite_to_sec_oam_buf_3x_++hpos0':5865,

// Stays low for a while after copy_sprite_to_sec_oam_buf goes high
'/do_copy_sprite_to_sec_oam':1057,
'do_copy_sprite_to_sec_oam':5853,

// Skips an out-of-range sprite during sprite evaluation
spr_eval_skip_sprite:118,
'+spr_eval_skip_sprite':4025,
'/spr_eval_skip_sprite':2931,
// Sets up the 'next' values for the spr_addr bits to clear spr_addr1-0 and
// bump spr_addr7-2.
spr_addr_clear_low_bump_high_setup:156,
'/spr_addr_clear_low_bump_high_setup':231,

// Guess
sprite_in_range:1052,
'/sprite_in_range':1056,
'+/sprite_in_range':5878,
'+sprite_in_range':5911,

'+sprite_in_range_reg':1098,
'+/sprite_in_range_reg':5873,

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
'++/hpos0_3':6997,
'++/hpos_eq_256_to_319_and_rendering_3':6998,

'++hpos_eq_256_to_319_and_hpos_mod_8_eq_3_and_rendering':1310,
'++hpos_eq_256_to_319_and_hpos_mod_8_eq_2_and_rendering':1320,
'++hpos_eq_256_to_319_and_hpos_mod_8_eq_7_and_rendering':1328,
'++hpos_eq_256_to_319_and_hpos_mod_8_eq_5_and_rendering':1338,
'+++hpos_eq_256_to_319_and_hpos_mod_8_eq_3_and_rendering':1305,
'+++hpos_eq_256_to_319_and_hpos_mod_8_eq_2_and_rendering':1321,
'+++hpos_eq_256_to_319_and_hpos_mod_8_eq_7_and_rendering':1330,
'+++hpos_eq_256_to_319_and_hpos_mod_8_eq_5_and_rendering':1336,

// Pixel selection logic

spr_out_pat1:8077,
spr_out_pat0:8078,

'spr_out_/prio':7831,
'spr_out_/attr1':7832,
'spr_out_/attr0':7833,
'spr_out_/pat1_2':7834,
'spr_out_/pat0_2':7835,

'+spr_out_/prio':7638,
'+spr_out_/attr1':7639,
'+spr_out_/attr0':7640,
'+spr_out_/pat1':7641,
'+spr_out_/pat0':7642,

'+spr_out_prio':7473,
'+spr_out_attr1':1524,
'+spr_out_attr0':1519,
'+spr_out_pat1':1514,
'+spr_out_pat0':1512,

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

'/ab_in_palette_range_and_not_rendering_2':1535,

'bg_pixel_opaque':1458,
'+bg_pixel_opaque':7510,

'spr_pixel_transparent':1406,
'spr_pixel_opaque':7367,
'+spr_pixel_opaque':7509,
'+spr_and_bg_pixel_transparent':1499,
'+/spr_and_bg_pixel_transparent':1493,
'+spr_pixel_opaque_and_not_hidden_behind_bg_pixel':1408,
'+/spr_pixel_opaque_and_not_hidden_behind_bg_pixel':1407,
'++spr_pixel_opaque_and_not_hidden_behind_bg_pixel':7632,
'++/spr_pixel_opaque_and_not_hidden_behind_bg_pixel':7829,
// vramaddr_v4 is selected when the background palette hack is active (address
// bus points in 3FXX range)
'(++/spr_pixel_opaque_and_not_hidden_behind_bg_pixel)_or_/vramaddr_v4':10700,

// After muxing. Selects between sprite and bg.
selected_attr1:7577,
selected_attr0:7578,
selected_pat1:7579,
selected_pat0:7580,
'+/selected_attr1':7633,
'+/selected_attr0':7634,
'+/selected_pat1':7635,
'+/selected_pat0':7636,
'+selected_attr1':7823,
'+selected_attr0':7824,
'+selected_pat1':7825,
'+selected_pat0':7826,
'+selected_attr1_or_exp_in3_if_bg':10695,
'+selected_attr0_or_exp_in2_if_bg':10696,
'+selected_pat1_or_exp_in1_if_bg':10697,
'+selected_pat0_or_exp_in0_if_bg':10698,
'++selected_attr1_or_exp_in3_if_bg':8020,
'++selected_attr0_or_exp_in2_if_bg':8021,
'++selected_pat1_or_exp_in1_if_bg':8022,
'++selected_pat0_or_exp_in0_if_bg':8023,
'++/selected_attr1_or_exp_in3_if_bg':8024,
'++/selected_attr0_or_exp_in2_if_bg':8025,
'++/selected_pat1_or_exp_in1_if_bg':8026,
'++/selected_pat0_or_exp_in0_if_bg':8027,

// The vramaddr_v bits are selected when the background palette hack is active
// (address bus points in 3FXX range)
'+(++/spr_pixel_opaque_and_not_hidden_behind_bg_pixel)_or_/vramaddr_v4':1540,
'(++/selected_attr1_or_exp_in3_if_bg)_or_/vramaddr_v3':8264,
'(++/selected_attr0_or_exp_in2_if_bg)_or_/vramaddr_v2':8265,
'(++/selected_pat1_or_exp_in1_if_bg)_or_/vramaddr_v1':8266,
'(++/selected_pat0_or_exp_in0_if_bg)_or_/vramaddr_v0':8267,

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

'/attrib_buf7':10079,
'/attrib_buf6':10083,
'/attrib_buf5':10080,
'/attrib_buf4':10084,
'/attrib_buf3':10081,
'/attrib_buf2':10085,
'/attrib_buf1':10082,
'/attrib_buf0':10086,

'+vramaddr_v1_out_2':10224,
'+/vramaddr_v1_out_2':2648,
'+vramaddr_v1_out_3':2637,
'+/vramaddr_v6_out':2660,

attrib_h_selected_bit:2671,
attrib_h_selected_bit_sampled:10124,
'/attrib_h_selected_bit_sampled':10077,
'+/attrib_h_selected_bit_sampled':10250,

attrib_l_selected_bit:2672,
attrib_l_selected_bit_sampled:10125,
'/attrib_l_selected_bit_sampled':10078,
'+/attrib_l_selected_bit_sampled':10251,

//
// vramaddr_v logic
//

load_vramaddr_v_hscroll_next:2312,
load_vramaddr_v_vscroll_next:2313,
'/load_vramaddr_v_vscroll_next':9731,
'+/load_vramaddr_v_vscroll_next':9711,

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

// Controls vramaddr_v10_carry_in
'/(vramaddr_v_vpos_overflow_and_not_rendering)_or_(vramaddr_v_hpos_eq_31_and_rendering)':9554,
// Controls vramaddr_v11_carry_in
'/(vramaddr_v10_carry_out_and_not_rendering)_or_(vramaddr_v_vpos_29_to_30_transition_and_rendering)':9476,

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

// Controls vramddr_v hscroll updating
'/reading_or_writing_2007_or_(++hpos_eq_0-255_or_320-335_and_hpos_mod_8_eq_7_and_rendering)':9661,

'+++hpos_eq_255_and_rendering':9473,
'+++/hpos_eq_255_and_rendering':9403,
'++++/hpos_eq_255_and_rendering':9463,
'++++hpos_eq_255_and_rendering':2049,

delayed_write_2006_low:2022, // TODO: Precise delay

'/(++++hpos_eq_255_and_rendering)_or_delayed_write_2006_low':9454,

'/reading_or_writing_2007_or_hpos_eq_255_and_rendering':9660,

'++hpos_eq_279_to_303_and_rendering_enabled':8865,
'++/hpos_eq_279_to_303_and_rendering_enabled':8784,
'++hpos_eq_279_to_303_and_rendering_enabled_2':8805,

'/(++hpos_eq_279_to_303_and_rendering_enabled_and_vpos_eq_261)_or_delayed_write_2006_low':8945,

//
// Address and sprite logic above vramaddr_v
//

'rendering_and_+hpos2':1963,
'not_rendering_and_/vramaddr_v_13_out':2074,
'rendering_or_vramaddr_v_13_out':2042,
'/((+hpos_eq_0-255_or_320-335_and_hpos_mod_8_eq_2_or_3_and_rendering)_or_(rendering_and_+hpos2))':2047,
'(+hpos_eq_0-255_or_320-335_and_hpos_mod_8_eq_2_or_3_and_rendering)_or_(rendering_and_+hpos2)':9220,
'/((+hpos_eq_0-255_or_320-335_and_hpos_mod_8_eq_2_or_3_and_rendering)_or_(rendering_and_+hpos2)_or_write_2007_ended_2)':2045,

// Address signal generation
ab12_out:9215,
ab11_out:9216,
ab10_out:9217,
ab9_out:9205,
ab8_out:9206,
ab7_out:9207,
ab6_out:9208,
ab5_out:9209,
ab4_out:9210,
ab3_out:9211,
ab2_out:9212,
ab1_out:9213,
ab0_out:9214,

// spr_d3-d0
'++vpos_minus_spr_d3':8751,
'++vpos_minus_spr_d2':8752,
'++vpos_minus_spr_d1':8753,
'++vpos_minus_spr_d0':8754,
'++/vpos_minus_spr_d3':8779,
'++/vpos_minus_spr_d2':8780,
'++/vpos_minus_spr_d1':8781,
'++/vpos_minus_spr_d0':8782,
// TODO: More specific names
'++/vpos_minus_spr_d3_buf':8747,
'++/vpos_minus_spr_d2_buf':8748,
'++/vpos_minus_spr_d1_buf':8749,
'++/vpos_minus_spr_d0_buf':8750,
'++vpos_minus_spr_d3_buf':8729,
'++vpos_minus_spr_d2_buf':8730,
'++vpos_minus_spr_d1_buf':8731,
'++vpos_minus_spr_d0_buf':8732,
'++vpos_minus_spr_d3_buf_after_ev_y_flip':8733,
'++vpos_minus_spr_d2_buf_after_ev_y_flip':8736,
'++vpos_minus_spr_d1_buf_after_ev_y_flip':8737,
'++vpos_minus_spr_d0_buf_after_ev_y_flip':8738,
'++/vpos_minus_spr_d3_buf_after_ev_y_flip':8965,
'++/vpos_minus_spr_d2_buf_after_ev_y_flip':8802,
'++/vpos_minus_spr_d1_buf_after_ev_y_flip':8803,
'++/vpos_minus_spr_d0_buf_after_ev_y_flip':8804,
'++/vpos_minus_spr_d3_buf_after_ev_y_flip_if_8x16_else_/spr_d0_buf':10711,
'(++/vpos_minus_spr_d3_buf_after_ev_y_flip_if_8x16_else_/spr_d0_buf)_if_fetching_sprites_else_+/_db0_buf':10726,
'++/vpos_minus_spr_d2_buf_after_ev_y_flip_if_fetching_sprites_else_vramaddr_/v14':10715,
'++/vpos_minus_spr_d1_buf_after_ev_y_flip_if_fetching_sprites_else_vramaddr_/v13':10716,
'++/vpos_minus_spr_d0_buf_after_ev_y_flip_if_fetching_sprites_else_vramaddr_/v12':10717,
'(+++/vpos_minus_spr_d3_buf_after_ev_y_flip_if_8x16_else_/spr_d0_buf)_if_fetching_sprites_else_++/_db0_buf':9043,
'+++/vpos_minus_spr_d2_buf_after_ev_y_flip_if_fetching_sprites_else_+vramaddr_/v14':9044,
'+++/vpos_minus_spr_d1_buf_after_ev_y_flip_if_fetching_sprites_else_+vramaddr_/v13':9045,
'+++/vpos_minus_spr_d0_buf_after_ev_y_flip_if_fetching_sprites_else_+vramaddr_/v12':9046,
'/((+++/vpos_minus_spr_d3_buf_after_ev_y_flip_if_8x16_else_/spr_d0_buf)_if_fetching_sprites_else_++/_db0_buf)':9114,
'/(+++/vpos_minus_spr_d2_buf_after_ev_y_flip_if_fetching_sprites_else_+vramaddr_/v14)':9116,
'/(+++/vpos_minus_spr_d1_buf_after_ev_y_flip_if_fetching_sprites_else_+vramaddr_/v13)':9117,
'/(+++/vpos_minus_spr_d0_buf_after_ev_y_flip_if_fetching_sprites_else_+vramaddr_/v12)':9118,

// spr_d8-1 left

'/_db0':8755,
'+/_db0':8739,
'+_db0':8770,
'+_db0_buf':8884,
'+/_db0_buf':8799,
'/_db7':8757,
'+/_db7':8740,
'+_db7':8756,
'+_db7_buf':8877,
'+/_db7_buf':8786,

'/spr_size_out_2':8801,
'/spr_size_out_3':8717,
spr_d0_buf:8885,
'/spr_d0_buf':8800,
spr_d0_buf_2:8876,
'/spr_d0_buf_2':8966,
spr_d7_buf:8886,
'/spr_d7_buf':8785,

'/spr_d0_buf_if_8x16_else_/spr_pat_out':8735,
'/(spr_d0_buf_if_8x16_else_/spr_pat_out)_if_fetching_sprites_else_/bkg_pat_out':10718,
'/spr_d7_buf_if_fetching_sprites_else_/_db7_buf':10719,
'/spr_d6_buf_if_fetching_sprites_else_/_db6_buf':10720,
'/spr_d5_buf_if_fetching_sprites_else_/_db5_buf':10721,
'/spr_d4_buf_if_fetching_sprites_else_/_db4_buf':10722,
'/spr_d3_buf_if_fetching_sprites_else_/_db3_buf':10723,
'/spr_d2_buf_if_fetching_sprites_else_/_db2_buf':10724,
'/spr_d1_buf_if_fetching_sprites_else_/_db1_buf':10725,
'+(/(spr_d0_buf_if_8x16_else_/spr_pat_out)_if_fetching_sprites_else_/bkg_pat_out)':9035,
'+(/spr_d7_buf_if_fetching_sprites_else_/_db7_buf)':9036,
'+(/spr_d6_buf_if_fetching_sprites_else_/_db6_buf)':9037,
'+(/spr_d5_buf_if_fetching_sprites_else_/_db5_buf)':9038,
'+(/spr_d4_buf_if_fetching_sprites_else_/_db4_buf)':9039,
'+(/spr_d3_buf_if_fetching_sprites_else_/_db3_buf)':9040,
'+(/spr_d2_buf_if_fetching_sprites_else_/_db2_buf)':9041,
'+(/spr_d1_buf_if_fetching_sprites_else_/_db1_buf)':9042,
'+/(/(spr_d0_buf_if_8x16_else_/spr_pat_out)_if_fetching_sprites_else_/bkg_pat_out)':9106,
'+/(/spr_d7_buf_if_fetching_sprites_else_/_db7_buf)':9107,
'+/(/spr_d6_buf_if_fetching_sprites_else_/_db6_buf)':9108,
'+/(/spr_d5_buf_if_fetching_sprites_else_/_db5_buf)':9109,
'+/(/spr_d4_buf_if_fetching_sprites_else_/_db4_buf)':9110,
'+/(/spr_d3_buf_if_fetching_sprites_else_/_db3_buf)':9111,
'+/(/spr_d2_buf_if_fetching_sprites_else_/_db2_buf)':9112,
'+/(/spr_d1_buf_if_fetching_sprites_else_/_db1_buf)':9113,

'++/hpos0_4':8806,
'++hpos_mod_8_eq_1_and_rendering_2':8807,
'++/hpos_mod_8_eq_1_and_rendering_2':8991,
'+++/hpos_mod_8_eq_1_and_rendering_2':8783,
'+++/hpos_mod_8_eq_1_and_rendering_and_pclk0_2':1870,
'++/hpos_eq_256_to_319_and_rendering_4':1910,

spr_loadflag_and_pclk0:8728,
y_flip_flag_in:1677,
y_flip_flag:1673,
'/y_flip_flag':1678,

//
// $2007 and read/write VRAM logic
//

rendering_4:10603,
'++hpos0_3':10593,
'/read_2007_output_vrambuf':10578,
read_2007_output_vrambuf_2:2327,
'+rendering_and_/hpos0_and_pclk0':10576,
'+not_rendering':10553,
'+/not_rendering':10554,
'ab_in_palette_range_and_not_rendering':10551, // ab_13-8 = 1
'ab_in_palette_range_and_not_rendering_2':1266,
'/read_2007_trigger':10601,

read_2007_reg:10580,
'/read_2007_reg':10585,
// There's probably more going on here
not_reading_2007_and_read_2007_reg:2825,
'+not_reading_2007_and_read_2007_reg':10608,
'++not_reading_2007_and_read_2007_reg':10600,
'+/not_reading_2007_and_read_2007_reg':10605,
'++/not_reading_2007_and_read_2007_reg':10606,
'++not_reading_2007_and_read_2007_reg_2':10586,
'+++not_reading_2007_and_read_2007_reg':10572,
'+++/not_reading_2007_and_read_2007_reg':2792,
'++++/not_reading_2007_and_read_2007_reg':10581,
'++++not_reading_2007_and_read_2007_reg':2811,
'+++++not_reading_2007_and_read_2007_reg':10574,
'+++++/not_reading_2007_and_read_2007_reg':10566,

// Delayed signals that go high after reading 2007, for ~one tick (TODO:
// further investigation of ranges). _1 goes high first, then _2.
// They never overlap.
read_2007_ended_1:10568,
read_2007_ended_2:2325,

write_2007_reg:10583,
'/write_2007_reg':10590,
// There's probably more going on here
not_writing_2007_and_write_2007_reg:2824,
'+not_writing_2007_and_write_2007_reg':10607,
'++not_writing_2007_and_write_2007_reg':10599,
'+/not_writing_2007_and_write_2007_reg':10604,
'++/not_writing_2007_and_write_2007_reg':10602,
'++not_writing_2007_and_write_2007_reg':10575,
'+++not_writing_2007_and_write_2007_reg':10579,
'+++/not_writing_2007_and_write_2007_reg':2791,
'++++/not_writing_2007_and_write_2007_reg':10573,
'++++not_writing_2007_and_write_2007_reg':2810,
'+++++not_writing_2007_and_write_2007_reg':10571,

// Delayed signals that go high after reading 2007, for ~one tick (TODO:
// further investigation of ranges). _1 goes high first, then _2.
// They never overlap.
write_2007_ended_1:2782,
write_2007_ended_2:1275,
'+write_2007_ended_2':2778,

'/reading_or_writing_2007':2749,
reading_or_writing_2007:2266,

'/write_2007_ended_2':10587,
'/write_2007_ended_2_':10592,

'/read_2007_ended_1_or_write_2007_ended_1_or_+(rendering_and_/hpos0_and_pclk0)':2793,

'/read_2007_ended_2_or_++(rendering_and_/hpos0)':10577,

'/read_2007_ended_2':2326,

'/inbuf7':9758,
'/inbuf6':9795,
'/inbuf5':9853,
'/inbuf4':9902,
'/inbuf3':9978,
'/inbuf2':10206,
'/inbuf1':10306,
'/inbuf0':10417,

db_buf_read_2007_ended7:9756,
db_buf_read_2007_ended6:9785,
db_buf_read_2007_ended5:9843,
db_buf_read_2007_ended4:9892,
db_buf_read_2007_ended3:9968,
db_buf_read_2007_ended2:10176,
db_buf_read_2007_ended1:10292,
db_buf_read_2007_ended0:10375,

//
// OAM column decoder
//

spr_addr2_out:50,
spr_addr1_out:54,
spr_addr0_out:62,

// spr_ptr5-0 directly selects the column

//
// OAM access logic
//

// Common logic
rendering_and_pclk0:237,
'++/hpos0_5':280,
// Goes high a while after write_2004_value (TODO: exact delay). Also shortened.
delayed_write_2004_value:157,
// This condition is used by the rendering logic to enable writes to the OAM
// (to write to secondary OAM). Writes can also be enabled separately by
// writing $2004.
'in_visible_frame_and_rendering_and_not_spr_ptr_overflow_and_not_spr_overflow_on_cur_line_and_++hpos0_and_pclk1':261,
oam_write_disable:334, // !261 && !delayed_write_2004_value

// Logic next to spr_d7. It's probably the same for all bits.
_io_db7_buf_not_rendering:3628,
'/_io_db7_buf_not_rendering':476,
set_spr_d7_in_oam:3736,
clear_spr_d7_in_oam:3699,

'+spr_d7':3377,
'+/spr_d7':3375,
'read_2004_enable_and_+spr_d7':3428,
'read_2004_enable_and_+/spr_d7':3506,
'/spr_d7':3431,
'/spr_d7_reg':3364, // Forms a reg together with spr_d7
'/spr_d7_reg_in':3508,

spr_d7_int:273,
'/spr_d7_int':253,
spr_d7_int_reg:426,
'/spr_d7_int_reg':3591,

//
// Palette logic
//

pal_d0_int:1287,
'/pal_d0_int':1377,
pal_d0_int_reg:6910,
'/pal_d0_int_reg':6956,

set_pal_d0:6731,
clear_pal_d0:6651,

pal_d0_out:7107,
'/pal_d0_out':1215,

'+/pal_d0_out':7225,
'+/pal_d0_out_2':1282,
'+pal_d0_out':6916,
'++pal_d0_out_2':6851,
'++/pal_d0_out':6810,
'read_2007_output_palette_and_++pal_d0_out':6689,
'/read_2007_output_palette_and_++pal_d0_out':6570,
'+pal_d0_out':811, // Ouput

'/pal_d1_out':6565,
'/pal_d2_out':6566,
'/pal_d3_out':6567,
'/pal_d4_out':6564,
'/pal_d5_out':6568,

'+/pal_d1_out':6423,
'+/pal_d2_out':6457,
'+/pal_d3_out':6458,
'+/pal_d4_out':6419,
'+/pal_d5_out':6491,

pclk0_5:6495,

'+pal_d1_out':872, // Output
'+pal_d2_out':810, // Output
'+pal_d3_out':812, // Output
'+pal_d4_out':1203,
'++pal_d4_out':6417,
'++/pal_d4_out':6493,
'+++/pal_d4_out':1217,
'+++pal_d4_out':1216,
'+++/pal_d4_out_2':6335,
'+pal_d5_out':6497,
'++pal_d5_out':6418,
'++/pal_d5_out':1249,
'+++/pal_d5_out':1258,
'+++pal_d5_out':1157,
'+++/pal_d5_out_2':6266,

'++pal_d0_out':573,
'++pal_d1_out':752,
'++pal_d2_out':644,
'++pal_d3_out':559,

'++pal_d0_out':573,
'++pal_d1_out':752,
'++pal_d2_out':644,
'++pal_d3_out':559,

'++/pal_d0_out':527,
'++/pal_d1_out':548,
'++/pal_d2_out':526,
'++/pal_d3_out':3909,

'+++/pal_d0_out':421,
'+++/pal_d1_out':459,
'+++/pal_d2_out':475,
'+++/pal_d3_out':490,

'+++pal_d0_out':3585,
'+++pal_d1_out':473,
'+++pal_d2_out':482,
'+++pal_d3_out':504,

'+++/pal_d0_out_2':3584,
'+++/pal_d1_out_2':3627,
'+++/pal_d2_out_2':3666,
'+++/pal_d3_out_2':3752,

'+++pal_d3-1_eq_0':542,
'+++pal_d3-1_eq_0':542,
'in_draw_range_and_++/pal_d3-1_eq-0':5423,
'+in_draw_range_and_++/pal_d3-1_eq-0':5298,
'/(+in_draw_range_and_++/pal_d3-1_eq-0)':918,
'/(in_range_2_or_3_or_in_draw_range_and_++/pal_d3-1_eq_0)':921,
'in_range_2_or_3_or_in_draw_range_and_++/pal_d3-1_eq_0':912,
'+in_range_2_or_3_or_in_draw_range_and_++/pal_d3-1_eq_0':892,

// Chroma decoder

// These are also sunk by the Johnson counter above them
'pal_d3-0_eq_3':316,
'pal_d3-0_eq_A':322,
'pal_d3-0_eq_5':317,
'pal_d3-0_eq_C':323,
'pal_d3-0_eq_F':405,
'pal_d3-0_eq_7':318,
'pal_d3-0_eq_E':324,
'pal_d3-0_eq_9':325,
'pal_d3-0_eq_4':326,
'pal_d3-0_eq_B':319,
'pal_d3-0_eq_6':320,
'pal_d3-0_eq_D':331,
'pal_d3-0_eq_8':321,

chroma_waveform_out:381,

// Outputs driving luma

'pal_d5-4_eq_3_and_+in_draw_range_and_++/pal_d3-1_eq_0':1141,
'pal_d5-4_eq_0_and_+in_draw_range_and_++/pal_d3-1_eq_0':1142,
'pal_d5-4_eq_1_and_+in_draw_range_and_++/pal_d3-1_eq_0':1143,
'pal_d5-4_eq_2_and_+in_draw_range_and_++/pal_d3-1_eq_0':1140,

'/(pal_d5-4_eq_3_and_+in_draw_range_and_++/pal_d3-1_eq_0)':952,
'/(pal_d5-4_eq_0_and_+in_draw_range_and_++/pal_d3-1_eq_0)':991,
'/(pal_d5-4_eq_1_and_+in_draw_range_and_++/pal_d3-1_eq_0)':1085,
'/(pal_d5-4_eq_2_and_+in_draw_range_and_++/pal_d3-1_eq_0)':1042,

//
// Sprite-loading logic
//

spr_loadFlag_and_pclk0:9497,

'/(spr_loadFlag_and_pclk0)':9496,
x_flip_flag_in_2:9487,
'/x_flip_flag_in':1860,
x_flip_flag_in:1842,

'/spr0_prio':9583,
'+/spr0_prio':9560,
'+spr0_prio':1796,

// After eventual x flip
spr_d7_in:8874,
spr_d6_in:8962,
spr_d5_in:9032,
spr_d4_in:9130,
spr_d3_in:9204,
spr_d2_in:9315,
spr_d1_in:9400,
spr_d0_in:9464,

'/(spr_d7_in_and_+sprite_in_range_reg)':8875,
'/(spr_d6_in_and_+sprite_in_range_reg)':8963,
'/(spr_d5_in_and_+sprite_in_range_reg)':9033,
'/(spr_d4_in_and_+sprite_in_range_reg)':9131,
'/(spr_d3_in_and_+sprite_in_range_reg)':9219,
'/(spr_d2_in_and_+sprite_in_range_reg)':9316,
'/(spr_d1_in_and_+sprite_in_range_reg)':9401,
'/(spr_d0_in_and_+sprite_in_range_reg)':9474,

'++hpos_mod_64_eq_0-7':2228,
'+++hpos_mod_64_eq_0-7':9707,
'+++/hpos_mod_64_eq_0-7':2189,

'spr_loadX_and_+++hpos_mod_64_eq_0-7_and_pclk0':2202,
'spr_loadL_and_+++hpos_mod_64_eq_0-7_and_pclk0':1839,
'spr_loadH_and_+++hpos_mod_64_eq_0-7_and_pclk0':1840,
'spr_loadFlag_and_+++hpos_mod_64_eq_0-7_and_pclk0':2174,

//
// Sprite hpos counters
//

'/spr0_p7':2486,
'/spr0_p6':2520,
'/spr0_p5':2550,
'/spr0_p4':2572,
'/spr0_p3':2617,
'/spr0_p2':2658,
'/spr0_p1':2687,
'/spr0_p0':2720,

spr0_p7_out:9880,
spr0_p6_out:9956,
spr0_p5_out:10027,
spr0_p4_out:2473,
spr0_p3_out:2454,
spr0_p2_out:2443,
spr0_p1_out:2427,
spr0_p0_out:2408,

spr0_p7_borrow:2398,
spr0_p6_borrow:2501,
spr0_p5_borrow:2532,
spr0_p5_borrow_in:2412,
spr0_p4_borrow:2576, // Unused
spr0_p3_borrow:2590,
spr0_p2_borrow:2629,
spr0_p1_borrow:2669,
spr0_p0_borrow:2697,

'/spr0_p6_borrow':9910,
'/spr0_p5_borrow':9986,
'/spr0_p4_borrow':10060,
'/spr0_p3_borrow':10123,
'/spr0_p2_borrow':10214,
'/spr0_p1_borrow':10314,
'/spr0_p0_borrow':10425,

spr0_p7_next:9921,
spr0_p6_next:9995,
spr0_p5_next:10068,
spr0_p4_next:10133,
spr0_p3_next:10223,
spr0_p2_next:10323,
spr0_p1_next:10436,
spr0_p0_next:10542,

spr0_load_next:2434,

'+++++hpos_eq_339_and_rendering_and_/spr0_p7_borrow_and_pclk0':2366,

// Reg
spr0_active:9804,
'/spr0_active':2383,
'spr0_active_and_++in_visible_frame_and_rendering':9781,
'+spr0_active_and_++in_visible_frame_and_rendering':9771,
'/(+spr0_active_and_++in_visible_frame_and_rendering)':1603,
'+spr0_active_and_++in_visible_frame_and_rendering_and_pclk1':1838,

//
// Sprite priority
//

use_sprite_0:1612,
use_sprite_1:1606,
use_sprite_2:1604,
use_sprite_3:1599,
use_sprite_4:1597,
use_sprite_5:1589,
use_sprite_6:1585,
use_sprite_7:1581,

//
// Misc.
//

'/rendering_disabled':5900,
pclk0_2:6084,
pclk0_4:8920,
pclk1_2:1064,
pclk1_3:2610,
'++hpos0_2':589,
'/read_2002_outupt_spr0_hit':1253,

// Internal master clock for video generation
clk0_int:218,
'/clk0_int':245,

// Set by reset, cleared at line 261
after_reset_reg:1716,
'/after_reset_reg':1707,

vramaddr_v5_carry_in:2117,
'/vramaddr_v5_carry_in_2':9736,

// Corrections

'+vpos_eq_240-260':5816,
'+/vpos_eq_240-260':5793,
'+/vpos_eq_240-260_2':5829,

'/_ab13':2017,
'/_ab12':2008,
'/_ab11':1992,
'/_ab10':1988,
'/_ab9':1985,
'/_ab8':1966,
'/_ab7':2043,
'/_ab6':2021,
'/_ab5':2019,
'/_ab4':2014,
'/_ab3':1994,
'/_ab2':1662,
'/_ab1':1626,
'/_ab0':1616,
'/_ale':1593,
}

for (var extra_node in nodenames_extra) {
    // Prefer own versions
    for (var node in nodenames)
        if (nodenames[node] == nodenames_extra[extra_node])
            delete nodenames[node]

    nodenames[extra_node] = nodenames_extra[extra_node]
}
