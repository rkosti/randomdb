var url = []; // urls of the images
var p = [];   // bbox of the images (same for both - rectangular boxes as well as ploygon masks)
//url[0] ="https://s3-us-west-2.amazonaws.com/mturkade20k/sun_ardczdjeutfxllrc.jpg";
// p[0] = "200,360 197,374 196,390 197,399 198,400 171,400 148,400 108,400 95,399 96,393 98,383 98,375 100,368 112,367 129,366 144,363 162,363 153,378 158,380 165,374 177,371 191,368 200,360 100,217 106,192 113,179 124,170 121,160 116,148 112,142 110,131 105,121 99,106 105,102 113,95 129,86 146,85 149,83 168,98 176,106 178,109 180,120 180,135 175,150 177,162 196,164 215,177 225,195 230,207 234,216 230,230 228,238 232,282 222,309 211,325 196,343 189,357 183,365 176,367 161,375 158,370 165,358 151,355 155,353 171,344 185,331 192,324 191,316 190,307 195,293 196,269 196,251 190,233 192,220 191,211 180,209 165,209 150,209 133,211 115,215 104,217 100,217 ";
url[0] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bult9eabg3786vmz.jpg";
url[1] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_ahpz8ytc5jopipt3.jpg";
url[2] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_lertjap8bdkuw1c2.jpg";
url[3] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_4snx2n5dmma6d87b.jpg";
url[4] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_5o6e9b3nf4pwhtyb.jpg";
url[5] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_45oymywubx37hrgw.jpg";
url[6] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_lqy3yw6uffit43r5.jpg";
url[7] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_4ug8d9l3w1k63x25.jpg";
url[8] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_gna09ornz5nnlp2p.jpg";
url[9] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_a47k5i0tk8l8f9f0.jpg";
url[10] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_kxr9kdhnj25le310.jpg";
url[11] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_a2wyob5lhcyp81k0.jpg";
url[12] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_egjsiqaxt1u56zuj.jpg";
url[13] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bqpb0sb28ynq942a.jpg";
url[14] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bdmxcn549kxpgyuz.jpg";
url[15] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_c7w1pzlubqgv0cx8.jpg";
url[16] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_kbefjvukzahqqj2a.jpg";
url[17] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_4zd0fticv1th8fqk.jpg";
url[18] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_1h5f3r8kbae0yy2i.jpg";
url[19] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bult9eabg3786vmz.jpg";
url[20] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_j4ruk5yvf7jfsyi5.jpg";
url[21] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_6u01zpu74z7woro2.jpg";
url[22] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_ffs1auvd4b38xywv.jpg";
url[23] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_0ngqpb5lq7sfsgry.jpg";
url[24] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_ae3lp0xaelqifpxh.jpg";
url[25] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_knoqnn00ohioflua.jpg";
url[26] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_ddrvyx9z949uoigi.jpg";
url[27] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_7y4j76cp4j0bp8ak.jpg";
url[28] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_39ilg8zgjk5vh6hd.jpg";
url[29] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_dha1814rf3m4bwwh.jpg";
url[30] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_datfpbrlaqg6xpih.jpg";
url[31] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_7y4j76cp4j0bp8ak.jpg";
url[32] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bi6jjlipqfiopwul.jpg";
url[33] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_2e65golwqylwo5n1.jpg";
url[34] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_aj9rwiin1t7tvzmt.jpg";
url[35] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_6t7htld8ot5eyn71.jpg";
url[36] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_aynj4hv21783wye3.jpg";
url[37] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_ltex6215he8f1t0q.jpg";
url[38] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_4pxbupnc9huakpse.jpg";
url[39] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_d19byi8y59xi5qh0.jpg";
url[40] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_fzub8zm15ebpbt7w.jpg";
url[41] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_63aj08mg3v562snd.jpg";
url[42] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_8np21e1eyv14u0eg.jpg";
url[43] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_78f9qfs131fgh21s.jpg";
url[44] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_belw7xz1lwepxcyq.jpg";
url[45] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_kxr9kdhnj25le310.jpg";
url[46] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_f9aok3gchutjszef.jpg";
url[47] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_g19w51gvcck6tkcs.jpg";
url[48] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_jguqafow5wc0xyng.jpg";
url[49] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_8h6ethm0i6kfifjf.jpg";
url[50] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_8rd28mh0tenwjcis.jpg";
url[51] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_87v3t9w9diyephya.jpg";
url[52] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_7qc97robmuj0sgar.jpg";
url[53] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_7y4j76cp4j0bp8ak.jpg";
url[54] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_cbfyiwge4be9on3e.jpg";
url[55] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_b1ngq38hpyuid6ep.jpg";
url[56] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_daldduagznyjt1t8.jpg";
url[57] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_6sta8ktkim5xpnqz.jpg";
url[58] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_4snx2n5dmma6d87b.jpg";
url[59] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_1isvqw0ouuqpf6qd.jpg";
url[60] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_9ta1irr6he5sha8a.jpg";
url[61] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_aod0fku1m8jqnk65.jpg";
url[62] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_59w4i9jrvyk3fuq4.jpg";
url[63] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_ai2y0fy7dvg836xj.jpg";
url[64] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_i0yn4g7drud50nzx.jpg";
url[65] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_6y4gfbc1h3sfiv46.jpg";
url[66] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_8h6ethm0i6kfifjf.jpg";
url[67] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_eddmzh09yfpnqk48.jpg";
url[68] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_9k6z6dvb9jmczjs0.jpg";
url[69] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_kyu6e0t8woh4eu37.jpg";
url[70] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_ipdrnqshvo5znsg9.jpg";
url[71] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_a1ywd3x70mtmlf9e.jpg";
url[72] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_5suwqn2nwi0eddzr.jpg";
url[73] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_jdnvt9vg9b05ntie.jpg";
url[74] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_4ofs92m3rzckkr3s.jpg";
url[75] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_c8x0qhgucnwa8osa.jpg";
url[76] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_egjsiqaxt1u56zuj.jpg";
url[77] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_kbefjvukzahqqj2a.jpg";
url[78] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_g19w51gvcck6tkcs.jpg";
url[79] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_3egcfvlwvvort5gr.jpg";
url[80] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_cl3fmwnxxjbab6nn.jpg";
url[81] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_5suwqn2nwi0eddzr.jpg";
url[82] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bult9eabg3786vmz.jpg";
url[83] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_6gmtv0nc9klfzvn8.jpg";
url[84] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bdmxcn549kxpgyuz.jpg";
url[85] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_agwju3cp0bxlvxbo.jpg";
url[86] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_9k6z6dvb9jmczjs0.jpg";
url[87] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_38letayfmgvq3oc3.jpg";
url[88] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_hwnqfnie5u6k38ee.jpg";
url[89] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_67eo2ni6pyu6gnmg.jpg";
url[90] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_hw73hpu9jl293gho.jpg";
url[91] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_6x39fss9wee3gzwm.jpg";
url[92] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_7src19u0l6oz4fv2.jpg";
url[93] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_eefb3zyxcoq7ejur.jpg";
url[94] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_aveabr0nxayrtqvb.jpg";
url[95] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_a4f9h0ena8n0cdm2.jpg";
url[96] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bjb1jzt7nk0efrqn.jpg";
url[97] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_1jrlecsrvljmujs9.jpg";
url[98] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_7we31cs7jzpvi6on.jpg";
url[99] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_9rbjc598iuixp5tr.jpg";
url[100] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_dg99pbev7ny8lmjv.jpg";
url[101] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_a1ywd3x70mtmlf9e.jpg";
url[102] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_agkp4ofx926zyry4.jpg";
url[103] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_kx4x2gnb85gubure.jpg";
url[104] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_desgsj6pvocuhbjw.jpg";
url[105] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_9ner196uj772iiwq.jpg";
url[106] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_746ku2c3z5y835ti.jpg";
url[107] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_b0x452vm6gpfy6sn.jpg";
url[108] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_9a3lu8fx0d5099j3.jpg";
url[109] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_eccuwzfknah22y58.jpg";
url[110] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_1awcnwmu1c1kxu7z.jpg";
url[111] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_6khzqujguskbyfrt.jpg";
url[112] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_lurkgjfjo5g2v22l.jpg";
url[113] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_b4rav7pp8uukg3mr.jpg";
url[114] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_6t10g0lwrscjxl32.jpg";
url[115] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_4ofs92m3rzckkr3s.jpg";
url[116] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_3ycc854v4tijgnuq.jpg";
url[117] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_4fmuyguac481kkzy.jpg";
url[118] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_6sta8ktkim5xpnqz.jpg";
url[119] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_b5j1848vph1ivan5.jpg";
url[120] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_59w4i9jrvyk3fuq4.jpg";
url[121] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_7src19u0l6oz4fv2.jpg";
url[122] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_4pxbupnc9huakpse.jpg";
url[123] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_6nzba0eccvq7ga4x.jpg";
url[124] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_4huaw19teoh3y0kn.jpg";
url[125] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bdgr9no3epmkfdx5.jpg";
url[126] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_7qc97robmuj0sgar.jpg";
url[127] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_9y79t2x7ao8dbllv.jpg";
url[128] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_6sta8ktkim5xpnqz.jpg";
url[129] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_9ta1irr6he5sha8a.jpg";
url[130] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_4gbxrd9uc9ljiw7l.jpg";
url[131] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_5uvwx7uzf1m0mbxq.jpg";
url[132] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bwlqbt2xdlexg55p.jpg";
url[133] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_a55bc3xim5kijpmu.jpg";
url[134] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_j6icw82akrc978ao.jpg";
url[135] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_3wvy7cz984q9zz8g.jpg";
url[136] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_akj7pf0tfiada6xh.jpg";
url[137] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_61vi4s5osmku1sb3.jpg";
url[138] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_cjfml3sqnsxwlev3.jpg";
url[139] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_397hz7wjb9sb5vvb.jpg";
url[140] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_8ekvbo5n8nazjjua.jpg";
url[141] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_0a7a8ons84y86e9v.jpg";
url[142] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_c7w1pzlubqgv0cx8.jpg";
url[143] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_l25gecqdq940oi4f.jpg";
url[144] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_56te9eusekihxy3f.jpg";
url[145] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bj5qbd9zjux0ta4k.jpg";
url[146] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_9m1vqgmbyse03s03.jpg";
url[147] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_841h1njx9p88hjdl.jpg";
url[148] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_4cdj4wlnkvn3h6fe.jpg";
url[149] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_dqjeqsvzrrj3zdba.jpg";
url[150] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_c7w1pzlubqgv0cx8.jpg";
url[151] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_desgsj6pvocuhbjw.jpg";
url[152] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_7u3x9soa96d7qya5.jpg";
url[153] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_ipdrnqshvo5znsg9.jpg";
url[154] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_gxvu6rgtprnbptcd.jpg";
url[155] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_0kc0mwm3zjw9hjap.jpg";
url[156] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_cusmcmouyhg5kvm5.jpg";
url[157] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bf0sqsf6wb7j9yiy.jpg";
url[158] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_0vw78kdlfg8p1yjv.jpg";
url[159] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_3h03tyyukb98lfxz.jpg";
url[160] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_9ta1irr6he5sha8a.jpg";
url[161] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_8h6ethm0i6kfifjf.jpg";
url[162] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_4e1wjtejmn8nezbm.jpg";
url[163] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_aauw9rrtf6g57fs8.jpg";
url[164] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_ksgroyitbailpqbq.jpg";
url[165] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_hrvc8j7hn78arzby.jpg";
url[166] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_5o6e9b3nf4pwhtyb.jpg";
url[167] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_ksyikkfzowmtey41.jpg";
url[168] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_2sund7p7v6vpxsr8.jpg";
url[169] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_1lnp4dh222wanywj.jpg";
url[170] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_7w22ja5x9tt4e740.jpg";
url[171] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_3wvy7cz984q9zz8g.jpg";
url[172] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_6y4gfbc1h3sfiv46.jpg";
url[173] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bult9eabg3786vmz.jpg";
url[174] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_1ycdyqjzqzny2se2.jpg";
url[175] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_2fywuapd7f31kzij.jpg";
url[176] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bm2g4nzs222v0xsf.jpg";
url[177] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_1ycdyqjzqzny2se2.jpg";
url[178] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_2fywuapd7f31kzij.jpg";
url[179] = "https://cdn.rawgit.com/rkosti/randomdb/master/frame_bm2g4nzs222v0xsf.jpg";

p[0] = "81,73 81,108 106,108 106,73";
p[1] = "317,38 317,74 342,74 342,38";
p[2] = "393,232 393,289 443,289 443,232";
p[3] = "93,94 93,167 140,167 140,94";
p[4] = "29,266 29,278 39,278 39,266";
p[5] = "16,196 16,222 39,222 39,196";
p[6] = "251,81 251,138 273,138 273,81";
p[7] = "290,90 290,128 318,128 318,90";
p[8] = "156,142 156,173 178,173 178,142";
p[9] = "173,46 173,136 243,136 243,46";
p[10] = "309,6 309,91 372,91 372,6";
p[11] = "147,48 147,70 161,70 161,48";
p[12] = "200,116 200,126 209,126 209,116";
p[13] = "193,113 193,196 260,196 260,113";
p[14] = "201,28 201,56 218,56 218,28";
p[15] = "275,241 275,268 295,268 295,241";
p[16] = "102,242 102,251 113,251 113,242";
p[17] = "142,24 142,48 162,48 162,24";
p[18] = "279,73 279,172 406,172 406,73";
p[19] = "188,66 188,124 234,124 234,66";
p[20] = "44,61 44,78 55,78 55,61";
p[21] = "80,98 80,137 108,137 108,98";
p[22] = "75,126 75,178 118,178 118,126";
p[23] = "297,209 297,224 320,224 320,209";
p[24] = "219,190 219,249 251,249 251,190";
p[25] = "259,83 259,154 313,154 313,83";
p[26] = "172,29 172,109 229,109 229,29";
p[27] = "358,192 358,226 387,226 387,192";
p[28] = "191,91 191,106 201,106 201,91";
p[29] = "242,18 242,90 286,90 286,18";
p[30] = "234,27 234,64 275,64 275,27";
p[31] = "129,207 129,221 147,221 147,207";
p[32] = "170,160 170,169 179,169 179,160";
p[33] = "201,119 201,148 223,148 223,119";
p[34] = "5,110 5,180 47,180 47,110";
p[35] = "63,40 63,57 76,57 76,40";
p[36] = "286,90 286,105 296,105 296,90";
p[37] = "117,51 117,122 165,122 165,51";
p[38] = "33,53 33,78 55,78 55,53";
p[39] = "255,32 255,74 282,74 282,32";
p[40] = "207,268 207,299 231,299 231,268";
p[41] = "360,200 360,217 373,217 373,200";
p[42] = "94,148 94,248 184,248 184,148";
p[43] = "256,217 256,239 273,239 273,217";
p[44] = "243,137 243,166 261,166 261,137";
p[45] = "157,56 157,115 197,115 197,56";
p[46] = "381,165 381,194 400,194 400,165";
p[47] = "155,41 155,126 227,126 227,41";
p[48] = "182,80 182,117 206,117 206,80";
p[49] = "36,72 36,91 52,91 52,72";
p[50] = "447,146 447,216 488,216 488,146";
p[51] = "59,372 59,425 106,425 106,372";
p[52] = "336,85 336,114 359,114 359,85";
p[53] = "446,196 446,212 459,212 459,196";
p[54] = "124,17 124,91 179,91 179,17";
p[55] = "231,218 231,236 245,236 245,218";
p[56] = "185,38 185,74 210,74 210,38";
p[57] = "360,152 360,193 396,193 396,152";
p[58] = "160,97 160,148 194,148 194,97";
p[59] = "194,158 194,171 204,171 204,158";
p[60] = "197,144 197,188 233,188 233,144";
p[61] = "328,19 328,60 351,60 351,19";
p[62] = "197,105 197,127 212,127 212,105";
p[63] = "229,23 229,66 264,66 264,23";
p[64] = "226,121 226,133 236,133 236,121";
p[65] = "253,49 253,112 307,112 307,49";
p[66] = "97,79 97,124 136,124 136,79";
p[67] = "101,8 101,118 182,118 182,8";
p[68] = "215,252 215,297 238,297 238,252";
p[69] = "244,109 244,133 268,133 268,109";
p[70] = "20,126 20,156 41,156 41,126";
p[71] = "251,41 251,77 277,77 277,41";
p[72] = "157,245 157,284 177,284 177,245";
p[73] = "193,107 193,138 218,138 218,107";
p[74] = "203,73 203,88 215,88 215,73";
p[75] = "152,57 152,146 258,146 258,57";
p[76] = "146,91 146,111 161,111 161,91";
p[77] = "219,249 219,260 227,260 227,249";
p[78] = "336,40 336,111 388,111 388,40";
p[79] = "200,175 200,204 221,204 221,175";
p[80] = "163,196 163,215 176,215 176,196";
p[81] = "313,239 313,258 327,258 327,239";
p[82] = "377,62 377,102 408,102 408,62";
p[83] = "389,60 389,83 407,83 407,60";
p[84] = "99,137 99,184 135,184 135,137";
p[85] = "245,136 245,179 277,179 277,136";
p[86] = "105,104 105,148 163,148 163,104";
p[87] = "249,42 249,68 267,68 267,42";
p[88] = "348,10 348,50 381,50 381,10";
p[89] = "339,106 339,125 356,125 356,106";
p[90] = "369,58 369,151 419,151 419,58";
p[91] = "365,118 365,131 371,131 371,118";
p[92] = "71,376 71,412 87,412 87,376";
p[93] = "76,242 76,271 93,271 93,242";
p[94] = "367,177 367,219 385,219 385,177";
p[95] = "119,131 119,155 137,155 137,131";
p[96] = "176,34 176,98 224,98 224,34";
p[97] = "24,75 24,95 36,95 36,75";
p[98] = "75,125 75,151 93,151 93,125";
p[99] = "33,260 33,273 45,273 45,260";
p[100] = "330,115 330,157 371,157 371,115";
p[101] = "325,44 325,79 349,79 349,44";
p[102] = "242,184 242,266 320,266 320,184";
p[103] = "130,147 130,184 154,184 154,147";
p[104] = "404,113 404,135 425,135 425,113";
p[105] = "202,128 202,164 222,164 222,128";
p[106] = "153,73 153,147 211,147 211,73";
p[107] = "489,183 489,197 498,197 498,183";
p[108] = "351,78 351,140 405,140 405,78";
p[109] = "428,139 428,148 437,148 437,139";
p[110] = "302,78 302,163 353,163 353,78";
p[111] = "384,116 384,127 398,127 398,116";
p[112] = "342,86 342,139 377,139 377,86";
p[113] = "75,388 75,400 82,400 82,388";
p[114] = "214,50 214,111 258,111 258,50";
p[115] = "190,81 190,94 201,94 201,81";
p[116] = "148,265 148,275 165,275 165,265";
p[117] = "145,56 145,77 170,77 170,56";
p[118] = "68,77 68,96 84,96 84,77";
p[119] = "249,163 249,191 270,191 270,163";
p[120] = "391,48 391,77 411,77 411,48";
p[121] = "248,378 248,396 264,396 264,378";
p[122] = "310,88 310,104 321,104 321,88";
p[123] = "323,54 323,77 344,77 344,54";
p[124] = "106,62 106,87 125,87 125,62";
p[125] = "75,130 75,139 82,139 82,130";
p[126] = "426,66 426,94 449,94 449,66";
p[127] = "220,210 220,247 236,247 236,210";
p[128] = "425,62 425,97 459,97 459,62";
p[129] = "470,105 470,147 500,147 500,105";
p[130] = "309,135 309,166 333,166 333,135";
p[131] = "472,184 472,194 484,194 484,184";
p[132] = "84,48 84,63 101,63 101,48";
p[133] = "151,41 151,80 184,80 184,41";
p[134] = "268,120 268,140 282,140 282,120";
p[135] = "45,79 45,87 55,87 55,79";
p[136] = "172,216 172,246 191,246 191,216";
p[137] = "180,121 180,144 196,144 196,121";
p[138] = "447,162 447,176 460,176 460,162";
p[139] = "58,48 58,67 72,67 72,48";
p[140] = "328,39 328,57 342,57 342,39";
p[141] = "246,97 246,153 279,153 279,97";
p[142] = "404,235 404,260 420,260 420,235";
p[143] = "305,83 305,129 337,129 337,83";
p[144] = "256,63 256,140 317,140 317,63";
p[145] = "307,39 307,64 325,64 325,39";
p[146] = "268,224 268,435 427,435 427,224";
p[147] = "208,108 208,173 253,173 253,108";
p[148] = "307,227 307,239 318,239 318,227";
p[149] = "195,61 195,120 245,120 245,61";
p[150] = "103,248 103,264 116,264 116,248";
p[151] = "40,136 40,188 73,188 73,136";
p[152] = "59,142 59,153 67,153 67,142";
p[153] = "113,78 113,122 148,122 148,78";
p[154] = "160,196 160,308 253,308 253,196";
p[155] = "173,235 173,249 184,249 184,235";
p[156] = "264,211 264,218 273,218 273,211";
p[157] = "424,7 424,38 448,38 448,7";
p[158] = "87,106 87,151 120,151 120,106";
p[159] = "227,244 227,291 254,291 254,244";
p[160] = "16,127 16,167 51,167 51,127";
p[161] = "177,35 177,78 207,78 207,35";
p[162] = "80,79 80,99 96,99 96,79";
p[163] = "247,106 247,122 261,122 261,106";
p[164] = "310,63 310,203 434,203 434,63";
p[165] = "321,127 321,171 354,171 354,127";
p[166] = "381,136 381,162 398,162 398,136";
p[167] = "402,22 402,72 441,72 441,22";
p[168] = "86,121 86,158 110,158 110,121";
p[169] = "175,74 175,118 206,118 206,74";
p[170] = "171,146 171,163 181,163 181,146";
p[171] = "175,103 175,140 205,140 205,103";
p[172] = "457,131 457,146 468,146 468,131";
p[173] = "263,70 263,92 283,92 283,70";
p[174] = "245,118 245,154 270,154 270,118";
p[175] = "241,130 241,180 281,180 281,130";
p[176] = "344,66 344,145 395,145 395,66";
p[177] = "245,118 245,154 270,154 270,118";
p[178] = "241,130 241,180 281,180 281,130";
p[179] = "344,66 344,145 395,145 395,66";
