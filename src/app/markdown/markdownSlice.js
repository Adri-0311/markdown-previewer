import { createSlice } from '@reduxjs/toolkit';
import TextBase from '../../assets/text.json';

export const markdownSlice = createSlice({
  name: 'markdownInput',
  initialState: {
    input: TextBase.markdown.join('\n\n'),
  },
  reducers: {
    updateMarkdown: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const {updateMarkdown} = markdownSlice.actions;
export default markdownSlice.reducer;
