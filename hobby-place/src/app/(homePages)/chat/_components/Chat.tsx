'use client';

import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export const WebSocketDemo = () => {
  const [socketUrl, setSocketUrl] = useState('wss://echo.websocket.org');
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => [...prev, lastMessage]);
    }
  }, [lastMessage]);

  const handleChangeSocketUrl = useCallback(() => {
    setSocketUrl('wss://demos.kaazing.com/echo');
  }, []);

  const handleSendMessage = useCallback(() => {
    sendMessage('Hello');
  }, [sendMessage]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting...',
    [ReadyState.OPEN]: 'Connected ✅',
    [ReadyState.CLOSING]: 'Closing...',
    [ReadyState.CLOSED]: 'Disconnected ❌',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
      <h1 className="text-2xl font-semibold text-center">WebSocket Demo</h1>

      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <button
          onClick={handleChangeSocketUrl}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Change Socket URL
        </button>
        <button
          onClick={handleSendMessage}
          disabled={readyState !== ReadyState.OPEN}
          className={`px-4 py-2 rounded-lg transition ${
            readyState === ReadyState.OPEN
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-400 text-white cursor-not-allowed'
          }`}
        >
          Send "Hello"
        </button>
      </div>

      <div className="text-center text-lg font-medium">
        WebSocket Status: <span className="font-semibold">{connectionStatus}</span>
      </div>

      {lastMessage && (
        <div className="text-center text-gray-700">
          Last message: <span className="font-mono">{lastMessage.data}</span>
        </div>
      )}

      <div>
        <h2 className="text-lg font-semibold mb-2">Message History</h2>
        <ul className="bg-gray-100 rounded-lg p-4 space-y-2 max-h-64 overflow-y-auto">
          {messageHistory.map((message, idx) => (
            <li key={idx} className="font-mono text-sm text-gray-800">
              {message?.data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
