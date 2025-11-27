'''
Business: Send contact form submissions to Telegram bot
Args: event - dict with httpMethod, body (name, phone, email, message)
      context - object with request_id attribute
Returns: HTTP response dict with success/error status
'''

import json
import os
import urllib.request
import urllib.parse
from typing import Dict, Any


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'POST')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Get Telegram credentials from environment
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Telegram credentials not configured'})
        }
    
    # Parse request body
    body_data = json.loads(event.get('body', '{}'))
    name = body_data.get('name', 'Не указано')
    phone = body_data.get('phone', 'Не указан')
    email = body_data.get('email', 'Не указан')
    message = body_data.get('message', 'Не указано')
    
    # Format message for Telegram
    telegram_message = f"""
🔔 Новая заявка с сайта neurosotrudnik.pro

👤 Имя: {name}
📱 Телефон: {phone}
📧 Email: {email}
💬 Сообщение: {message}
    """.strip()
    
    # Send message to Telegram
    telegram_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = {
        'chat_id': chat_id,
        'text': telegram_message,
        'parse_mode': 'HTML'
    }
    
    request_data = urllib.parse.urlencode(data).encode('utf-8')
    request = urllib.request.Request(telegram_url, data=request_data, method='POST')
    
    try:
        with urllib.request.urlopen(request) as response:
            response_data = response.read()
            telegram_response = json.loads(response_data)
            
            if telegram_response.get('ok'):
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'success': True, 'message': 'Заявка успешно отправлена'})
                }
            else:
                return {
                    'statusCode': 500,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'Failed to send Telegram message'})
                }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }
