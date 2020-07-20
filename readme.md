# 作品 1: Todo List

<img src="https://i.imgur.com/II2Jx3H.png"></img>

# 簡介

這是使用 typescript 製作的 Todo List

# 連結

- <a href='https://edinliu.github.io/ts-todolist-demo/'>demo</a>
- <a href='https://github.com/edinliu/ts-todolist-source-code'>原始碼</a>

# 製作過程

### 製作 component 的 ui 部分:

- InputAndSubmit: 輸入框與按鈕，用來輸入 todo
- TodoFilterPannel: 三個按鈕，用來切換顯示模式，有 show all、show todo、show done 三種。
- TodoItem: 一個可以被點擊的 list item，按下之後會有刪除線。其接收一個閉包函式去記錄當下的 todoListState.length，於被點擊時回傳給父祖件。
- TodoList: 包含數個 TodoItem
- TodoApp: 包含上述組件

### 製作 component 的 state 部分:

- InputAndSubmit: 1 個 state，用 onChange 來讓它的 input value 與 state 雙向綁定
- TodoApp:3 個 state

1. todoListState:
   預設值是空陣列，儲存整個 todo list 的資料
2. whichTodoItemClick:
   預設值是 null，當 TodoItem 被按下時，會用該 TodoItem 的 id 修改這個 state，useEffect 偵測到這個 state 的改變後，會修改 todoListState 內該 id 的 isDone。
3. filter
   filter 的值有'all'、'done'、'todo'三種。傳遞給 TodoItem 讓它去顯示或隱藏自己的 list item。

### 在過程中遇到的困難

- 一開始想要直接在 TodoItem 接收到的閉包函式中直接 讀取 todoListState ，並用 setState 更改值。然而只能讀取到 onClick 創建當下的 todoListState。
  解決方法是使用 useEffect。useEffect 會在每次執行時更新函式，可以保證取得最新的值。

### 未來目標

想要使用 google firebase 的身分驗證 api 與 firestore，替 todo list 增加登入功能。

2020.7.20

- 改成給 todo item 一個 props id，再由 handleClick 去傳回 id 給父組件。
- 新增登入、登出功能
  帳號 1:
  hello15948@haha.com
  15847fafas
  帳號 2:
  test456789@haha.com
  hfdhs4878
