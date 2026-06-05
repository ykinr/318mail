// functions/api/login.js

export async function onRequestPost(context) {
  try {
    // 画面側から送られてきたパスワードを受け取る
    const body = await context.request.json();
    const userPin = body.pin;

    // ★ ここに本当の暗証番号を設定（サーバー側なので絶対にバレません）
    const SECRET_PIN = "1234";

    // パスワードが一致しているかチェック
    if (userPin === SECRET_PIN) {
      // 成功の合図を返す
      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" }
      });
    } else {
      // 失敗の合図を返す
      return new Response(JSON.stringify({ success: false }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: "エラーが発生しました" }), {
      status: 400
    });
  }
}
