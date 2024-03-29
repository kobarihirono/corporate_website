$(document).ready(function () {
  // jQuery Validatorのカスタムメソッドを追加
  $.validator.addMethod(
    "emailLocalPart",
    function (value, element) {
      var emailParts = value.split("@");
      var local = emailParts[0];
      return this.optional(element) || local.length <= 64;
    },
    "メールアドレスのローカル部分は64文字以内にしてください"
  );

  $.validator.addMethod(
    "emailDomainPart",
    function (value, element) {
      var emailParts = value.split("@");
      var domain = emailParts[1];
      return this.optional(element) || (domain && domain.length <= 253);
    },
    "メールアドレスのドメイン部分は253文字以内にしてください"
  );

  // フォームのバリデーションルールとメッセージを設定
  $("#form").validate({
    rules: {
      inquiry_type: {
        required: true,
      },
      user_name: {
        required: true,
        maxlength: 100,
      },
      user_email: {
        required: true,
        email: true,
        emailLocalPart: true,
        emailDomainPart: true,
        maxlength: 254,
      },
      user_tel: {
        digits: true,
        rangelength: [10, 11],
      },
      user_company: {
        required: true,
        maxlength: 100,
      },
      user_message: {
        maxlength: 1000,
      },
      source: {
        required: true,
      },
    },
    messages: {
      inquiry_type: {
        required: "お問い合わせの種別を選択してください",
      },
      user_name: {
        required: "ご担当者名を入力してください",
        maxlength: "100文字以内で入力してください",
      },
      user_email: {
        required: "メールアドレスを入力してください",
        email: "正しい形式で入力してください",
        emailLocalPart: "ローカル部分は64文字以内で入力してください",
        emailDomainPart: "ドメインは253文字以内で入力してください",
        maxlength: "254文字以内で入力してください",
      },
      user_tel: {
        digits: "数字のみで入力してください",
        rangelength: "10桁もしくは11桁で入力してください",
      },
      user_company: {
        required: "会社名を入力してください",
        maxlength: "100文字以内で入力してください",
      },
      user_message: {
        maxlength: "1000文字以内で入力してください",
      },
      source: {
        required: "選択してください",
      },
    },
    errorElement: "div",
    errorPlacement: function (error, element) {
      error.addClass("validate-feedback");
      if (element.attr("name") === "inquiry_type") {
        error.insertAfter(".p-contact__form-list-item-radio");
      } else {
        error.insertAfter(element);
      }
    },
  });
});
