(self["webpackChunkaffiliate_network"] = self["webpackChunkaffiliate_network"] || []).push([[2075], {
    91654: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return _
            }
        });
        var r = n(67294)
          , a = n.n(r)
          , o = n(73727)
          , i = n(55881)
          , l = n(34064)
          , c = n(38676)
          , s = n(4942)
          , u = n(2813)
          , p = (0,
        s.Z)({}, c.crQ.Portal, {
            logo: function() {
                return u
            }
        })
          , d = n(18906)
          , f = {
            dashboard: "dashboard_text",
            offer: "sider_menu_text_offer",
            shopee_offer: "shopee_offer_title",
            brand_offer: "brand_offer_title",
            product_offer: "product_offer_title",
            offer_for_me: "exclusive_offers",
            custom_link: "custom_link_title",
            creative: "sider_menu_text_creative",
            productFeed: "Product Feed",
            report: "sider_menu_text_report",
            conversion_report: "conversion_report_title",
            click_report: "click_report_title",
            payment: "sider_menu_text_payment",
            billing: "billing_text",
            open_api: "open_api_menu",
            explanation: "explanation_text",
            account_setting: "account_setting_text",
            message_list: "message_list_title",
            export_management: "header_export_management_menu",
            payment_setting: "payment_setting_text",
            tax_explanation: "tax_qualifications_text",
            refer_friend: "refer_friend_text",
            referral_explanation: "regulation_text",
            social_partner: "shopee_social_partner_program_text",
            conversion_details: "conversion_details_title",
            campaign: "sider_menu_text_campaign",
            campaign_list: "affiliate_campaigns_text"
        }
          , m = function(e) {
            var t = e.location
              , n = t.pathname
              , r = t.search
              , i = p[c.crQ.Portal].logo()
              , s = n.split("/").slice(1).filter((function(e) {
                return !!e
            }
            ))
              , u = e.paths ? e.paths : "/" !== n ? n.split("/").slice(1).filter((function(e) {
                return !!e
            }
            )).map((function(e, t) {
                return {
                    path: "/".concat(s.slice(0, t + 1).join("/")).concat(r),
                    name: (0,
                    d.$t)(f[e])
                }
            }
            )) : [];
            return a().createElement("div", {
                className: "breadcrumb"
            }, a().createElement("span", {
                className: "fa logo",
                style: {
                    background: "url(".concat(i, ") no-repeat"),
                    backgroundSize: "contain"
                }
            }), a().createElement(o.Link, {
                to: c.tuR
            }, (0,
            d.$t)("homepage_text"), " ", s.length > 0 ? "/ " : ""), u.map((function(t, n) {
                return n < u.length - 1 ? e.pathDepth && n + 1 > e.pathDepth || !e.pathDepth ? a().createElement(o.Link, {
                    key: n,
                    to: t.path
                }, t.name, " / ") : a().createElement("span", {
                    key: n
                }, t.name, " /") : a().createElement("span", {
                    key: n,
                    className: "desc"
                }, e.name ? (0,
                l.DN)(e.name.replace(/_/g, " ")) : t.name)
            }
            )))
        }
          , _ = (0,
        i.EN)(m)
    },
    47130: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return m
            }
        });
        var r = n(4942)
          , a = n(45987)
          , o = n(67294)
          , i = n.n(o)
          , l = n(88961)
          , c = n(47166)
          , s = n.n(c)
          , u = ["primaryDefault", "className"];
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var f = function(e) {
            var t = e.primaryDefault
              , n = e.className
              , o = void 0 === n ? "" : n
              , c = (0,
            a.Z)(e, u)
              , p = s()((0,
            r.Z)({
                "mkt-btn": !0,
                "primary-default": t
            }, o, !!o))
              , f = d({
                className: p
            }, c);
            return i().createElement(l.Z, d({}, f))
        };
        f.defaultProps = {
            type: "default",
            primaryDefault: !1
        };
        var m = f
    },
    20530: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return J
            }
        });
        var r = n(67294)
          , a = n.n(r)
          , o = n(15861)
          , i = n(97685)
          , l = n(64687)
          , c = n.n(l)
          , s = n(45360)
          , u = n(38792)
          , p = n(56433)
          , d = n(95119)
          , f = n(91654)
          , m = n(39850)
          , _ = n(88961)
          , b = n(74855)
          , v = n.n(b)
          , y = n(18906)
          , h = n(38676)
          , g = n(53203);
        function x() {
            g.ZP.report({
                page_type: h.hsM.CUSTOM_LINK,
                operation: h.NQO.VIEW
            })
        }
        function k(e) {
            g.ZP.report({
                page_type: h.hsM.CUSTOM_LINK,
                operation: h.NQO.CLICK,
                target_type: "get_link",
                data: e
            })
        }
        function E(e) {
            g.ZP.report({
                page_type: h.hsM.CUSTOM_LINK,
                operation: h.NQO.CLICK,
                target_type: "copy_link",
                data: e
            })
        }
        var w, C = d.Z.TextArea, O = function(e) {
            var t = e.visible
              , n = e.onChange
              , r = e.subid_count
              , o = e.customLinkResults
              , i = e.originUrl
              , l = o.map((function(e) {
                return e.shortLink
            }
            )).join("\n");
            return a().createElement("div", {
                className: "success-modal"
            }, a().createElement(m.Z, {
                visible: t,
                onOk: function() {
                    return n(!1)
                },
                onCancel: function() {
                    return n(!1)
                },
                centered: !0,
                footer: [a().createElement(v(), {
                    key: "copy",
                    text: l,
                    onCopy: function() {
                        E({
                            original_link: i,
                            short_link: l,
                            tag_num: r
                        }),
                        s.Z.success((0,
                        y.$t)("get_link_modal_copy_successfully_tips"))
                    }
                }, a().createElement(_.Z, {
                    key: "submit",
                    type: "primary"
                }, (0,
                y.$t)("copy_link_text")))],
                width: 560
            }, a().createElement("div", {
                className: "success-modal-content"
            }, a().createElement("span", {
                className: "success-modal-title"
            }, (0,
            y.$t)("custom_link_get_link_modal_title")), a().createElement("div", {
                className: "success-modal-label"
            }, (0,
            y.$t)("get_link_modal_short_link_tips")), a().createElement(C, {
                style: {
                    height: 200
                },
                value: l,
                disabled: !0
            }))))
        }, S = n(47130), N = n(38222), Z = n(59902), I = n(34064), $ = n(4942);
        (function(e) {
            e[e["Success"] = 0] = "Success",
            e[e["UnknownError"] = 1] = "UnknownError",
            e[e["InvalidLink"] = 2] = "InvalidLink",
            e[e["InvalidSubId1"] = 3] = "InvalidSubId1",
            e[e["InvalidSubId2"] = 4] = "InvalidSubId2",
            e[e["InvalidSubId3"] = 5] = "InvalidSubId3",
            e[e["InvalidSubId4"] = 6] = "InvalidSubId4",
            e[e["InvalidSubId5"] = 7] = "InvalidSubId5"
        }
        )(w || (w = {}));
        var j, P = n(24280), D = (0,
        $.Z)({}, h.vSy, function() {
            var e = (0,
            o.Z)(c().mark((function e(t, n) {
                var r, a, o, i, l, s, u;
                return c().wrap((function(e) {
                    while (1)
                        switch (e.prev = e.next) {
                        case 0:
                            return l = t.commit,
                            e.next = 3,
                            (0,
                            P.ym)(n);
                        case 3:
                            return s = e.sent,
                            (0,
                            I.so)(s, (function(e) {
                                l({
                                    customResults: e.batchCustomLink
                                })
                            }
                            )),
                            u = s.errors ? w.UnknownError : ((null === (r = s.data) || void 0 === r ? void 0 : r.batchCustomLink) || []).findIndex((function(e) {
                                return (e.failCode ?? w.Success) !== w.Success
                            }
                            )),
                            e.abrupt("return", {
                                failedIndex: u,
                                resultCode: (null === (a = s.data) || void 0 === a || null === (o = a.batchCustomLink) || void 0 === o || null === (i = o[u]) || void 0 === i ? void 0 : i.failCode) || w.Success
                            });
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()), L = n(8844), U = n(3553), T = n(71152), R = (j = {},
        (0,
        $.Z)(j, T.Qo.ExceedLinksLimit, "exceed_links_limit_tip"),
        (0,
        $.Z)(j, T.Qo.NoLinks, "no_links_tip"),
        (0,
        $.Z)(j, T.Qo.NotMatchTemplate, "not_match_template_tip"),
        (0,
        $.Z)(j, T.Qo.ExceedSizeLimit, "excel_size_limit_tip"),
        (0,
        $.Z)(j, T.Qo.HasOngoingTask, "has_ongoing_task_tip"),
        j);
        function Q(e) {
            var t = e.file
              , n = e.onDelete
              , r = t.name
              , o = t.status
              , i = t.response
              , l = t.percent
              , c = "error" === o || "done" === o && (null === i || void 0 === i ? void 0 : i.code) !== T.Qo.Success;
            return a().createElement("div", {
                className: "uploaded-file ".concat(c ? "upload-error" : "")
            }, a().createElement("div", {
                className: "status-info"
            }, a().createElement(L.Z, {
                type: c ? "file-error" : "loading",
                className: "loading-icon",
                height: 14,
                width: 14
            }), a().createElement("div", {
                className: "name-and-progress"
            }, a().createElement("span", {
                className: "filename"
            }, r), a().createElement("span", {
                className: "progress-bar"
            }, a().createElement("span", {
                className: "progress-inner",
                style: {
                    width: (l || 0) + "%"
                }
            }))), c && a().createElement(L.Z, {
                type: "delete",
                className: "delete-icon",
                height: 14,
                width: 14,
                onClick: function() {
                    return n(t)
                }
            })), c && a().createElement("div", {
                className: "error-tip"
            }, (0,
            y.$t)(R[null === i || void 0 === i ? void 0 : i.code] || "system_error")))
        }
        var A, z = (0,
        $.Z)({}, h.crQ.Portal, {
            getUploadHeaders: function() {
                return {
                    "affiliate-program-type": String(h.vwk.normal)
                }
            }
        }), M = 10485760;
        function F(e) {
            var t = e.isFrozen
              , n = (0,
            r.useState)(null)
              , o = (0,
            i.Z)(n, 2)
              , l = o[0]
              , c = o[1]
              , u = t || "uploading" === (null === l || void 0 === l ? void 0 : l.status);
            return (0,
            r.useEffect)((function() {
                var e;
                (null === l || void 0 === l || null === (e = l.response) || void 0 === e ? void 0 : e.code) === T.Qo.Success && (0,
                I.Yo)(h.J28, !1)
            }
            ), [l]),
            a().createElement("div", {
                className: "upload-excel-tab"
            }, a().createElement("div", {
                className: "step"
            }, a().createElement("header", {
                className: "step-title"
            }, (0,
            y.$t)("step1")), a().createElement("div", {
                className: "template-addr"
            }, a().createElement(L.Z, {
                type: "download",
                fill: "#2673dd"
            }), a().createElement("a", {
                href: "/api/v1/upload/tasks/templates?taskType=batch_get_custom_link",
                target: "_blank",
                download: !0
            }, (0,
            y.$t)("download_template")))), a().createElement("div", {
                className: "step"
            }, a().createElement("header", {
                className: "step-title"
            }, (0,
            y.$t)("step2")), a().createElement("div", {
                className: "upload-excel"
            }, a().createElement(U.Z, {
                disabled: u,
                showUploadList: !1,
                onChange: function(e) {
                    return c(e.file)
                },
                action: "/api/v1/upload/tasks",
                data: {
                    taskType: "batch_get_custom_link"
                },
                accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                headers: z[h.crQ.Portal].getUploadHeaders(),
                beforeUpload: function(e) {
                    return !(e.size > M) || (s.Z.error((0,
                    y.$t)("excel_size_limit_tip")),
                    Promise.reject())
                }
            }, a().createElement(_.Z, {
                className: "upload-button ".concat(u ? "upload-disabled" : "")
            }, a().createElement(L.Z, {
                type: "upload",
                style: {
                    marginRight: 8
                }
            }), (0,
            y.$t)("upload"))), !!l && a().createElement(Q, {
                file: l,
                onDelete: function() {
                    return c(null)
                }
            })), a().createElement("div", {
                className: "upload-desc"
            }, (0,
            y.$t)("upload_file_tip"))))
        }
        (function(e) {
            e["CustomLink"] = "CustomLink",
            e["UploadExcel"] = "UploadExcel"
        }
        )(A || (A = {}));
        var K = 500
          , B = function(e) {
            var t, n = (0,
            Z.oR)("loginUser"), l = e.form.getFieldDecorator, m = (0,
            r.useState)(!1), _ = (0,
            i.Z)(m, 2), b = _[0], v = _[1], g = (0,
            N.useAction)(D, {
                customResults: [],
                originUrl: "",
                subid_count: 0
            }), E = (0,
            i.Z)(g, 4), C = E[0], $ = E[1], j = (E[2],
            E[3]), P = (0,
            r.useState)(A.CustomLink), L = (0,
            i.Z)(P, 2), U = L[0], T = L[1];
            (0,
            r.useEffect)((function() {
                x()
            }
            ), []);
            var R = function(t) {
                t.preventDefault(),
                e.form.validateFieldsAndScroll(function() {
                    var e = (0,
                    o.Z)(c().mark((function e(t, n) {
                        var r, a, o, i, l, u, p, d, f, m, _;
                        return c().wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t) {
                                        e.next = 22;
                                        break
                                    }
                                    if (r = n.original_url,
                                    a = n.sub_id1,
                                    o = n.sub_id2,
                                    i = n.sub_id3,
                                    l = n.sub_id4,
                                    u = n.sub_id5,
                                    p = (r || "").split("\n").map((function(e) {
                                        return e.trim()
                                    }
                                    )).filter(Boolean),
                                    !(p.length > K)) {
                                        e.next = 6;
                                        break
                                    }
                                    return s.Z.error((0,
                                    y.$t)("batch_custom_max_tip", {
                                        max: K
                                    })),
                                    e.abrupt("return");
                                case 6:
                                    return d = [a, o, i, l, u].reduce((function(e, t) {
                                        return t ? e + 1 : e
                                    }
                                    ), 0),
                                    j({
                                        subid_count: d,
                                        originUrl: r
                                    }),
                                    e.next = 10,
                                    $(h.vSy, {
                                        links: p,
                                        advancedLinkParams: {
                                            subId1: a,
                                            subId2: o,
                                            subId3: i,
                                            subId4: l,
                                            subId5: u
                                        }
                                    });
                                case 10:
                                    f = e.sent,
                                    m = f.resultCode,
                                    _ = f.failedIndex,
                                    e.t0 = m,
                                    e.next = e.t0 === w.Success ? 16 : e.t0 === w.InvalidLink ? 18 : 20;
                                    break;
                                case 16:
                                    return v(!0),
                                    e.abrupt("break", 21);
                                case 18:
                                    return p.length <= 1 ? s.Z.error((0,
                                    y.$t)("invalid_only_link_tip")) : s.Z.error((0,
                                    y.$t)("invalid_link_tip", {
                                        invalid_index: _ + 1
                                    })),
                                    e.abrupt("break", 21);
                                case 20:
                                    s.Z.error((0,
                                    y.$t)("system_error"));
                                case 21:
                                    k({
                                        original_link: r,
                                        tag_num: d,
                                        is_success: m === w.Success
                                    });
                                case 22:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }())
            };
            return a().createElement(a().Fragment, null, a().createElement("div", {
                className: "panel offer-panel custom-link-panel"
            }, a().createElement(f.Z, {
                pathDepth: 2
            }), a().createElement("div", {
                className: "page-content custom-content"
            }, a().createElement("div", {
                className: "header"
            }, a().createElement("span", {
                className: "title"
            }, (0,
            y.$t)("custom_link_title")), a().createElement("br", null), a().createElement("span", {
                className: "desc"
            }, a().createElement(y.v, {
                id: "custom_link_sub_title_text",
                config: {
                    values: {
                        strong: function(e) {
                            return a().createElement("strong", null, e)
                        },
                        country: h.yC5["id"]
                    }
                }
            }))), (null === n || void 0 === n || null === (t = n.grayConfig) || void 0 === t ? void 0 : t.batch_custom_link_creation) && a().createElement(u.Z, {
                className: "tab-bar",
                selectedKeys: [U],
                onSelect: function(e) {
                    return T(e.key)
                },
                mode: "horizontal"
            }, a().createElement(u.Z.Item, {
                key: A.CustomLink
            }, (0,
            y.$t)("custom_link_tab_title")), a().createElement(u.Z.Item, {
                key: A.UploadExcel
            }, (0,
            y.$t)("upload_excel_tab_title"))), U === A.UploadExcel ? a().createElement(F, {
                isFrozen: (null === n || void 0 === n ? void 0 : n.status) === h.IWJ.frozen
            }) : a().createElement("div", {
                className: "custom-text-area"
            }, a().createElement(p.Z, {
                className: "sub-id-form",
                wrapperCol: {
                    sm: {
                        span: 24
                    }
                },
                onSubmit: R
            }, a().createElement(p.Z.Item, null, l("original_url", {
                rules: [{
                    required: !0,
                    whitespace: !0,
                    message: (0,
                    y.$t)("custom_link_textarea_required")
                }, {
                    max: 3e3,
                    message: (0,
                    y.$t)("custom_link_length_limit_tips")
                }]
            })(a().createElement("div", {
                className: "custom-textarea"
            }, a().createElement(d.Z.TextArea, {
                placeholder: (0,
                y.$t)("batch_custom_link_textarea_placeholder", {
                    new_line: "\n",
                    link_prefix: "https://" + h.B8G["id"]
                }),
                rows: 8
            })))), a().createElement("span", {
                className: "custom-noted"
            }, (0,
            I.eS)((0,
            y.$t)("batch_get_link_modal_notes")[0]), (0,
            y.$t)("batch_get_link_modal_notes").slice(1)), [{
                field: "sub_id1",
                label: (0,
                I.eS)((0,
                y.$t)("sub_id_label", {
                    amount: 1
                })),
                placeholder: "".concat((0,
                y.$t)("example_title"), ": ").concat((0,
                y.$t)("sport_shoes_text"))
            }, {
                field: "sub_id2",
                label: (0,
                I.eS)((0,
                y.$t)("sub_id_label", {
                    amount: 2
                })),
                placeholder: "".concat((0,
                y.$t)("example_title"), ": InstagramFeed")
            }, {
                field: "sub_id3",
                label: (0,
                I.eS)((0,
                y.$t)("sub_id_label", {
                    amount: 3
                })),
                placeholder: "".concat((0,
                y.$t)("example_title"), ": 1212BirthdaySale")
            }, {
                field: "sub_id4",
                label: (0,
                I.eS)((0,
                y.$t)("sub_id_label", {
                    amount: 4
                })),
                placeholder: (0,
                y.$t)("please_enter")
            }, {
                field: "sub_id5",
                label: (0,
                I.eS)((0,
                y.$t)("sub_id_label", {
                    amount: 5
                })),
                placeholder: (0,
                y.$t)("please_enter")
            }].map((function(e) {
                return a().createElement(p.Z.Item, {
                    key: e.field,
                    className: "custom-input",
                    style: {
                        marginBottom: 24
                    },
                    label: e.label
                }, l(e.field, {
                    rules: [{
                        max: 50,
                        message: (0,
                        I.eS)((0,
                        y.$t)("get_link_modal_sub_id_max_characters", {
                            amount: 50
                        }))
                    }, {
                        pattern: /^[a-zA-Z0-9]+$/,
                        message: (0,
                        y.$t)("register_invalid_input")
                    }]
                })(a().createElement(d.Z, {
                    placeholder: e.placeholder
                })))
            }
            )), a().createElement(p.Z.Item, null, a().createElement(S.Z, {
                style: {
                    display: "block",
                    marginBottom: "24px"
                },
                type: "primary",
                htmlType: "submit",
                disabled: n.status === h.IWJ.frozen
            }, (0,
            y.$t)("get_link_button"))), a().createElement(O, {
                visible: b,
                onChange: function(e) {
                    return v(e)
                },
                customLinkResults: C.customResults,
                subid_count: C.subid_count,
                originUrl: C.originUrl
            }))))), U === A.UploadExcel ? null : a().createElement("div", {
                className: "custom-notes"
            }, a().createElement("span", {
                className: "custom-notes-title"
            }, (0,
            y.$t)("notes_text"), ":"), a().createElement("div", {
                className: "custom-notes-desc"
            }, (0,
            y.$t)("batch_custom_desc")), a().createElement("div", {
                className: "custom-notes-item"
            }, (0,
            y.$t)("batch_custom_link_notes"))))
        }
          , H = p.Z.create({
            name: "customLink"
        })(B)
          , q = function() {
            return a().createElement("div", {
                className: "container"
            }, a().createElement(H, null))
        }
          , J = q
    },
    20640: function(e, t, n) {
        "use strict";
        var r = n(11742)
          , a = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        }
          , o = "Copy to clipboard: #{key}, Enter";
        function i(e) {
            var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
            return e.replace(/#{\s*key\s*}/g, t)
        }
        function l(e, t) {
            var n, l, c, s, u, p, d = !1;
            t || (t = {}),
            n = t.debug || !1;
            try {
                c = r(),
                s = document.createRange(),
                u = document.getSelection(),
                p = document.createElement("span"),
                p.textContent = e,
                p.ariaHidden = "true",
                p.style.all = "unset",
                p.style.position = "fixed",
                p.style.top = 0,
                p.style.clip = "rect(0, 0, 0, 0)",
                p.style.whiteSpace = "pre",
                p.style.webkitUserSelect = "text",
                p.style.MozUserSelect = "text",
                p.style.msUserSelect = "text",
                p.style.userSelect = "text",
                p.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(),
                    t.format)
                        if (n.preventDefault(),
                        "undefined" === typeof n.clipboardData) {
                            window.clipboardData.clearData();
                            var r = a[t.format] || a["default"];
                            window.clipboardData.setData(r, e)
                        } else
                            n.clipboardData.clearData(),
                            n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(),
                    t.onCopy(n.clipboardData))
                }
                )),
                document.body.appendChild(p),
                s.selectNodeContents(p),
                u.addRange(s);
                var f = document.execCommand("copy");
                if (!f)
                    throw new Error("copy command was unsuccessful");
                d = !0
            } catch (m) {
                n && console.error("unable to copy using execCommand: ", m);
                try {
                    window.clipboardData.setData(t.format || "text", e),
                    t.onCopy && t.onCopy(window.clipboardData),
                    d = !0
                } catch (m) {
                    n && console.error("unable to copy using clipboardData: ", m),
                    n && console.error("falling back to prompt"),
                    l = i("message"in t ? t.message : o),
                    window.prompt(l, e)
                }
            } finally {
                u && ("function" == typeof u.removeRange ? u.removeRange(s) : u.removeAllRanges()),
                p && document.body.removeChild(p),
                c()
            }
            return d
        }
        e.exports = l
    },
    47443: function(e, t, n) {
        var r = n(42118);
        function a(e, t) {
            var n = null == e ? 0 : e.length;
            return !!n && r(e, t, 0) > -1
        }
        e.exports = a
    },
    1196: function(e) {
        function t(e, t, n) {
            var r = -1
              , a = null == e ? 0 : e.length;
            while (++r < a)
                if (n(t, e[r]))
                    return !0;
            return !1
        }
        e.exports = t
    },
    41848: function(e) {
        function t(e, t, n, r) {
            var a = e.length
              , o = n + (r ? 1 : -1);
            while (r ? o-- : ++o < a)
                if (t(e[o], o, e))
                    return o;
            return -1
        }
        e.exports = t
    },
    13: function(e) {
        function t(e, t) {
            return null != e && t in Object(e)
        }
        e.exports = t
    },
    42118: function(e, t, n) {
        var r = n(41848)
          , a = n(62722)
          , o = n(39375);
        function i(e, t, n) {
            return t === t ? o(e, t, n) : r(e, a, n)
        }
        e.exports = i
    },
    2958: function(e, t, n) {
        var r = n(46384)
          , a = n(90939)
          , o = 1
          , i = 2;
        function l(e, t, n, l) {
            var c = n.length
              , s = c
              , u = !l;
            if (null == e)
                return !s;
            e = Object(e);
            while (c--) {
                var p = n[c];
                if (u && p[2] ? p[1] !== e[p[0]] : !(p[0]in e))
                    return !1
            }
            while (++c < s) {
                p = n[c];
                var d = p[0]
                  , f = e[d]
                  , m = p[1];
                if (u && p[2]) {
                    if (void 0 === f && !(d in e))
                        return !1
                } else {
                    var _ = new r;
                    if (l)
                        var b = l(f, m, d, e, t, _);
                    if (!(void 0 === b ? a(m, f, o | i, l, _) : b))
                        return !1
                }
            }
            return !0
        }
        e.exports = l
    },
    62722: function(e) {
        function t(e) {
            return e !== e
        }
        e.exports = t
    },
    67206: function(e, t, n) {
        var r = n(91573)
          , a = n(16432)
          , o = n(70522)
          , i = n(1469)
          , l = n(39601);
        function c(e) {
            return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? i(e) ? a(e[0], e[1]) : r(e) : l(e)
        }
        e.exports = c
    },
    91573: function(e, t, n) {
        var r = n(2958)
          , a = n(1499)
          , o = n(42634);
        function i(e) {
            var t = a(e);
            return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function(n) {
                return n === e || r(n, e, t)
            }
        }
        e.exports = i
    },
    16432: function(e, t, n) {
        var r = n(90939)
          , a = n(27361)
          , o = n(79095)
          , i = n(15403)
          , l = n(89162)
          , c = n(42634)
          , s = n(40327)
          , u = 1
          , p = 2;
        function d(e, t) {
            return i(e) && l(t) ? c(s(e), t) : function(n) {
                var i = a(n, e);
                return void 0 === i && i === t ? o(n, e) : r(t, i, u | p)
            }
        }
        e.exports = d
    },
    40371: function(e) {
        function t(e) {
            return function(t) {
                return null == t ? void 0 : t[e]
            }
        }
        e.exports = t
    },
    79152: function(e, t, n) {
        var r = n(97786);
        function a(e) {
            return function(t) {
                return r(t, e)
            }
        }
        e.exports = a
    },
    45652: function(e, t, n) {
        var r = n(88668)
          , a = n(47443)
          , o = n(1196)
          , i = n(74757)
          , l = n(23593)
          , c = n(21814)
          , s = 200;
        function u(e, t, n) {
            var u = -1
              , p = a
              , d = e.length
              , f = !0
              , m = []
              , _ = m;
            if (n)
                f = !1,
                p = o;
            else if (d >= s) {
                var b = t ? null : l(e);
                if (b)
                    return c(b);
                f = !1,
                p = i,
                _ = new r
            } else
                _ = t ? [] : m;
            e: while (++u < d) {
                var v = e[u]
                  , y = t ? t(v) : v;
                if (v = n || 0 !== v ? v : 0,
                f && y === y) {
                    var h = _.length;
                    while (h--)
                        if (_[h] === y)
                            continue e;
                    t && _.push(y),
                    m.push(v)
                } else
                    p(_, y, n) || (_ !== m && _.push(y),
                    m.push(v))
            }
            return m
        }
        e.exports = u
    },
    23593: function(e, t, n) {
        var r = n(58525)
          , a = n(50308)
          , o = n(21814)
          , i = 1 / 0
          , l = r && 1 / o(new r([, -0]))[1] == i ? function(e) {
            return new r(e)
        }
        : a;
        e.exports = l
    },
    1499: function(e, t, n) {
        var r = n(89162)
          , a = n(3674);
        function o(e) {
            var t = a(e)
              , n = t.length;
            while (n--) {
                var o = t[n]
                  , i = e[o];
                t[n] = [o, i, r(i)]
            }
            return t
        }
        e.exports = o
    },
    89162: function(e, t, n) {
        var r = n(13218);
        function a(e) {
            return e === e && !r(e)
        }
        e.exports = a
    },
    42634: function(e) {
        function t(e, t) {
            return function(n) {
                return null != n && (n[e] === t && (void 0 !== t || e in Object(n)))
            }
        }
        e.exports = t
    },
    39375: function(e) {
        function t(e, t, n) {
            var r = n - 1
              , a = e.length;
            while (++r < a)
                if (e[r] === t)
                    return r;
            return -1
        }
        e.exports = t
    },
    30998: function(e, t, n) {
        var r = n(41848)
          , a = n(67206)
          , o = n(40554)
          , i = Math.max;
        function l(e, t, n) {
            var l = null == e ? 0 : e.length;
            if (!l)
                return -1;
            var c = null == n ? 0 : o(n);
            return c < 0 && (c = i(l + c, 0)),
            r(e, a(t, 3), c)
        }
        e.exports = l
    },
    79095: function(e, t, n) {
        var r = n(13)
          , a = n(222);
        function o(e, t) {
            return null != e && a(e, t, r)
        }
        e.exports = o
    },
    50308: function(e) {
        function t() {}
        e.exports = t
    },
    39601: function(e, t, n) {
        var r = n(40371)
          , a = n(79152)
          , o = n(15403)
          , i = n(40327);
        function l(e) {
            return o(e) ? r(i(e)) : a(e)
        }
        e.exports = l
    },
    18601: function(e, t, n) {
        var r = n(14841)
          , a = 1 / 0
          , o = 17976931348623157e292;
        function i(e) {
            if (!e)
                return 0 === e ? e : 0;
            if (e = r(e),
            e === a || e === -a) {
                var t = e < 0 ? -1 : 1;
                return t * o
            }
            return e === e ? e : 0
        }
        e.exports = i
    },
    40554: function(e, t, n) {
        var r = n(18601);
        function a(e) {
            var t = r(e)
              , n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        e.exports = a
    },
    45578: function(e, t, n) {
        var r = n(67206)
          , a = n(45652);
        function o(e, t) {
            return e && e.length ? a(e, r(t, 2)) : []
        }
        e.exports = o
    },
    74300: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CopyToClipboard = void 0;
        var r = o(n(67294))
          , a = o(n(20640));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function i(e) {
            return i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            i(e)
        }
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(n, !0).forEach((function(t) {
                    h(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function s(e, t) {
            if (null == e)
                return {};
            var n, r, a = u(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        function u(e, t) {
            if (null == e)
                return {};
            var n, r, a = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++)
                n = o[r],
                t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }
        function p(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function f(e, t, n) {
            return t && d(e.prototype, t),
            n && d(e, n),
            e
        }
        function m(e, t) {
            return !t || "object" !== i(t) && "function" !== typeof t ? b(e) : t
        }
        function _(e) {
            return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            _(e)
        }
        function b(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function v(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && y(e, t)
        }
        function y(e, t) {
            return y = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            y(e, t)
        }
        function h(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var g = function(e) {
            function t() {
                var e, n;
                p(this, t);
                for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
                    i[l] = arguments[l];
                return n = m(this, (e = _(t)).call.apply(e, [this].concat(i))),
                h(b(n), "onClick", (function(e) {
                    var t = n.props
                      , o = t.text
                      , i = t.onCopy
                      , l = t.children
                      , c = t.options
                      , s = r["default"].Children.only(l)
                      , u = (0,
                    a["default"])(o, c);
                    i && i(o, u),
                    s && s.props && "function" === typeof s.props.onClick && s.props.onClick(e)
                }
                )),
                n
            }
            return v(t, e),
            f(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.text,
                    e.onCopy,
                    e.options,
                    e.children)
                      , n = s(e, ["text", "onCopy", "options", "children"])
                      , a = r["default"].Children.only(t);
                    return r["default"].cloneElement(a, c({}, n, {
                        onClick: this.onClick
                    }))
                }
            }]),
            t
        }(r["default"].PureComponent);
        t.CopyToClipboard = g,
        h(g, "defaultProps", {
            onCopy: void 0,
            options: void 0
        })
    },
    74855: function(e, t, n) {
        "use strict";
        var r = n(74300)
          , a = r.CopyToClipboard;
        a.CopyToClipboard = a,
        e.exports = a
    },
    11742: function(e) {
        e.exports = function() {
            var e = document.getSelection();
            if (!e.rangeCount)
                return function() {}
                ;
            for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
                n.push(e.getRangeAt(r));
            switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                t.blur();
                break;
            default:
                t = null;
                break
            }
            return e.removeAllRanges(),
            function() {
                "Caret" === e.type && e.removeAllRanges(),
                e.rangeCount || n.forEach((function(t) {
                    e.addRange(t)
                }
                )),
                t && t.focus()
            }
        }
    }
}]);
